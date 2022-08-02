#!/bin/bash
# Basic test script to check if copying the data from the old database to the new database scheme was successful.
# Executes some tests on the comment table of the database.
if [ "$#" -ne 2 ]
then
	echo "2 arguments are needed; the old database name and the new database name"
	exit 1
fi

olddb=$1
newdb=$2

# Test 1: Test if the old and new database have an equal number of comments.
cnt1=$(psql $PSQLOPTS $olddb -tAc "SELECT COUNT(*) FROM comment;")
cnt2=$(psql $PSQLOPTS $newdb -tAc "SELECT COUNT(*) FROM comment;")

if [ "$cnt1" != "$cnt2" ]
then
	echo "FAIL: Different number of comments in table."
	exit 1
else
	echo "PASS: New database has the same number of comments as previously."
fi

# Test 2: Test if all comments have a correct graph_id (This check takes about 24min!)
if [[ "$execute_long_tests" == 1 ]]
then
	comment_ids=$(psql $PSQLOPTS $olddb -tAc "SELECT id from comment;")

	for comment_id in $comment_ids
	do
		res1=$(psql $PSQLOPTS $olddb -c "SELECT graph_id FROM graph_comment WHERE comments_id=${comment_id};")
		res2=$(psql $PSQLOPTS $newdb -c "SELECT graph_id FROM comment WHERE comment_id=${comment_id};")
		res1=$(echo $res1 | sed 's/^.*- //' | sed 's/ (.*$//')
		res2=$(echo $res2 | sed 's/^.*- //' | sed 's/ (.*$//')
		if [[ "$res1" != "$res2" ]]
		then
			echo "FAIL: Removing 'graph_comment' table didn't go as expected."
			exit 1
		fi
	done
	echo "PASS: Removing 'graph_comment' table works as expected."
fi

# Test 3: Test if adding a new comment creates a comment with the correct ID (bigger than maximum ID in the previous table).
max_comment_id=$(psql $PSQLOPTS $olddb -tAc "SELECT MAX(id) FROM comment;")

psql $PSQLOPTS $newdb -c "INSERT INTO comment(user_id, graph_id, commenttime, text) VALUES (25, 26, CURRENT_TIMESTAMP, 'test comment');" > /dev/null 2>&1

new_comment_id=$(psql $PSQLOPTS $newdb -tAc "SELECT comment_id FROM comment WHERE text='test comment' AND user_id=25 AND graph_id=26;")

psql $PSQLOPTS $newdb -c "DELETE FROM comment WHERE text='test comment' AND user_id=25 AND graph_id=26;" > /dev/null 2>&1

if [ $((new_comment_id - max_comment_id)) -gt 0  ]
then
	echo "PASS: Comment id sequence generator correctly updated."
else
	echo "FAIL: Comment id sequence generator incorrectly updated"
	exit 1;
fi


