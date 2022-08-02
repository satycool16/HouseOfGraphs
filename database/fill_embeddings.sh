#!/bin/bash
#Script to fill in the empty embedding field in the newly created database by using the String representation of the embedding of a .txt file
if [ "$#" -ne 2 ]
then
	echo "2 arguments are needed; the file.txt file to read and the name of the database to fill"
	exit 1
fi

file=$1
db=$2
username='hoguser'
password='admin'
PSQLOPTS="-U $username -h localhost"

# Remove empty lines from file
sed -i '/^$/d' $file

# Check if there are the same number of embeddings as there are graphs in the database
cnt1=$(wc -l <$file)
cnt2=$(PGPASSWORD=$password psql $PSQLOPTS -t -d $db -c 'SELECT COUNT(*) FROM graph;')

if [ $cnt1 != $cnt2 ]
then
	echo "FAIL: ${file} has ${cnt1} lines, while there are ${cnt2} graphs in the database."
	exit 1
fi

# Fill the database field 'embedding' with the correct 2D array of doubles from the file
tr '[]' '{}' < $file | PGPASSWORD=$password psql $PSQLOPTS -d $db  -c 'COPY embedding(graph_id,embedding) FROM STDIN DELIMITER '\':\'

# Set the embedding value to NULL for the special case of the Null graph
PGPASSWORD=$password psql $PSQLOPTS -d $db  -c 'UPDATE embedding SET embedding=NULL WHERE graph_id=44093'


