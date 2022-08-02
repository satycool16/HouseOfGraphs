#!/bin/bash
# Script that copies the HoG database and then removes all tables and unnessary columns from the database. This database can then be used by a Hibernate Java project to get the correct 
# representation of the embeddings.

# Additional parameters for psql:
username='hoguser'
password='admin'
PSQLOPTS="-U $username -h localhost"

check_exitstatus () {
        if [ $? -ne 0 ]
        then
                echo $1
                exit 1
        else
                echo $2
        fi
}


if [ "$#" -ne 1 ]
then
	echo "1 argument is needed; the old database name"
	exit 1
fi

olddb=$1
newdb='extract_embeddings'

# Check if hoguser exists and if not, create hoguser
user_exists=$(psql -U postgres -tAc "SELECT 1 FROM pg_roles WHERE rolname='$username';")
if [[ "$user_exists" == 1 ]]
then
	echo "User '$username' already exists"
else
	psql -U postgres -c "CREATE USER $username WITH SUPERUSER ENCRYPTED PASSWORD '$password';" > /dev/null 2>&1
	echo "User 'hoguser' created"
	user_db_exists=$(psql -U postgres -tAc "SELECT 1 FROM pg_database WHERE datname = '$username';")
	# Check if user database exists and if not, create database hoguser
	if [[ "$user_db_exists" == 1 ]]
	then
		echo "Database '$username' already exists"
	else 
		psql -U postgres -c "CREATE DATABASE $username" > /dev/null 2>&1
		echo "Database '$username' created"
	fi
fi

PGPASSWORD=$password psql $PSQLOPTS -c "CREATE DATABASE $newdb WITH TEMPLATE $olddb;" > /dev/null 2>&1
check_exitstatus "ERROR: Something went wrong while copying the original database. Check if you provided a valid name for the new database." "Original database copied."

psql $newdb -f ./sql_scripts/prepare_embeddings.sql > /dev/null 2>&1

