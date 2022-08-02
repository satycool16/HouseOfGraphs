#!/bin/bash
# Basic test script to check if copying the data from the old database to the new database scheme was successful.
# Executes some tests on the users and activation table of the database.
if [ "$#" -ne 2 ]
then
	echo "2 arguments are needed; the old database name and the new database name"
	exit 1
fi

olddb=$1
newdb=$2

# Test 1: Test if the old and new database have an equal number of users.
cnt1=$(psql $PSQLOPTS $olddb -tAc "SELECT COUNT(*) FROM usertable;")
cnt2=$(psql $PSQLOPTS $newdb -tAc "SELECT COUNT(*) FROM users;")

if [ "$cnt1" != "$cnt2" ]
then
	echo "FAIL: Different number of users in table."
	exit 1
else
	echo "PASS: New database has the same number of users as previously."
fi

# Test 2: Test if the activation table has the same number of entries as users in the old database.
cnt3=$(psql $PSQLOPTS $newdb -tAc "SELECT COUNT(*) FROM activation;")

if [ "$cnt1" != "$cnt3" ]
then
        echo "FAIL: The number of entries in the usertable and activation table differs."
        exit 1
else
        echo "PASS: The number of entries in the usertable and activation table is equal."
fi

# Test 3: Test if all activationkeys now reside in the activationtable correctly linked to each user.
user_ids=$(psql $PSQLOPTS $olddb -tAc "SELECT id from usertable;")
user_ids=$(echo $user_ids | sed 's/^.*- //' | sed 's/ (.*$//')

for user_id in $user_ids
do
	res1=$(psql $PSQLOPTS $olddb -tAc "SELECT activationkey FROM usertable WHERE id=${user_id};")
	res2=$(psql $PSQLOPTS $newdb -tAc "SELECT token FROM activation WHERE user_id=${user_id};")

	if [[ "$res1" != "$res2" ]]
	then
		echo "FAIL: Splitting 'usertable' into 'users' and 'activation' went wrong."
		exit 1
	fi
done
echo "PASS: Splitting 'usertable' into 'users' and 'activation' works as expected."

# Test 4: Test if adding a new user creates a user with the correct ID (bigger than maximum ID in the previous table)
max_user_id=$(psql $PSQLOPTS $olddb -tAc "SELECT MAX(id) FROM usertable;")

psql $PSQLOPTS $newdb -c "INSERT INTO users(activated, email, password, firstname, lastname, userrole, usesmd5) VALUES (TRUE, 'test@test.be', 'test', 'test', 'test', 1, TRUE);" > /dev/null 2>&1

new_user_id=$(psql $PSQLOPTS $newdb -tAc "SELECT user_id FROM users WHERE email='test@test.be';")

psql $PSQLOPTS $newdb -c "DELETE FROM users WHERE email='test@test.be';" > /dev/null 2>&1

if [ $((new_user_id - max_user_id)) -gt 0  ]
then
	echo "PASS: Users id sequence generator correctly updated."
else
	echo "FAIL: Users id sequence generator incorrectly updated"
	exit 1;
fi


