#!/bin/bash
# Basic test script to check if copying the data from the old database to the new database scheme was successful.
# Executes some tests on the invariant and calculate_invariant table of the database.
if [ "$#" -ne 2 ]
then
	echo "2 arguments are needed; the old database name and the new database name"
	exit 1
fi

olddb=$1
newdb=$2

# Test 1: Test if the old and new database have an equal number of invariants.
cnt1=$(psql $PSQLOPTS $olddb -tAc "SELECT COUNT(*) FROM invariant;")
cnt2=$(psql $PSQLOPTS $newdb -tAc "SELECT COUNT(*) FROM invariant;")

if [ "$cnt1" != "$cnt2" ]
then
	echo "FAIL: Different number of invariant in table."
	exit 1
else
	echo "PASS: New database has the same number of invariants as previously."
fi

# Test 2: Test if the calculate_invariant table has the same number of entries as the old invariant table.
cnt3=$(psql $PSQLOPTS $newdb  -tAc "SELECT COUNT(*) FROM calculate_invariant;")

if [ "$cnt1" != "$cnt3" ]
then
        echo "FAIL: The number of entries in the invariant and calculate_invariant table differs."
        exit 1
else
        echo "PASS: The number of entries in the invariant and calculate_invariant table is equal."
fi

# Test 3: Test if all grinvinnames now reside in the calculate_invariant table correctly linked to each invariant.
invariant_ids=$(psql $PSQLOPTS $olddb -tAc "SELECT id from invariant;")

for invariant_id in $invariant_ids
do
	res1=$(psql $PSQLOPTS $olddb -tAc "SELECT grinvinname FROM invariant WHERE id=${invariant_id};")
	res2=$(psql $PSQLOPTS $newdb -tAc "SELECT grinvinname FROM invariant NATURAL JOIN calculate_invariant WHERE invariant_id=${invariant_id};")
	if [[ "$res1" != "$res2" ]]
	then
		echo "FAIL: Splitting 'invariant' into 'invariant' and 'calculate_invariant' went wrong."
		exit 1
	fi
done
echo "PASS: Splitting 'invariant' into 'invariant' and 'calculate_invariant' works as expected."

# Test 4: Test if adding a new invariant creates an invariant with the correct ID (bigger than maximum ID in the previous table)
max_invariant_id=$(psql $PSQLOPTS $olddb -tAc "SELECT MAX(id) FROM invariant;")

psql $PSQLOPTS $newdb -c "INSERT INTO invariant(definition, keyword, invariantname) VALUES ('test', 'test', 'test');" > /dev/null 2>&1

new_invariant_id=$(psql $PSQLOPTS $newdb -tAc "SELECT invariant_id FROM invariant WHERE definition='test' AND keyword='test';")

psql $PSQLOPTS $newdb -c "DELETE FROM invariant WHERE definition='test' AND keyword='test';" > /dev/null 2>&1

if [ $((new_invariant_id - max_invariant_id)) -gt 0  ]
then
	echo "PASS: Invariant id sequence generator correctly updated."
else
	echo "FAIL: Invariant id sequence generator incorrectly updated"
	exit 1;
fi


