#!/bin/bash
# Script to create the new database from the old one by sequentially calling SQL script from './sql_scripts'.
# Provides error messages when a certain script can't execute successfully.

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


if [ "$#" -ne 2 ]
then
	echo "2 arguments are needed; the old database name and the new database name"
	exit 1
fi

olddb=$1
newdb=$2

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

PGPASSWORD=$password psql $PSQLOPTS $newdb -f ./sql_scripts/rename_original.sql > /dev/null 2>&1
check_exitstatus "ERROR: Something went wrong while renaming the original tables of the database." "Renamed original database tables."

PGPASSWORD=$password psql $PSQLOPTS $newdb -f ./sql_scripts/users.sql > /dev/null 2>&1
check_exitstatus "ERROR: Something went wrong while creating/filling the users table." "Users table created and filled."

PGPASSWORD=$password psql $PSQLOPTS $newdb -f ./sql_scripts/activation.sql > /dev/null 2>&1
check_exitstatus "ERROR: Something went wrong while creating/filling the activation table." "Activation table created and filled."

PGPASSWORD=$password psql $PSQLOPTS $newdb -f ./sql_scripts/graph.sql > /dev/null 2>&1
check_exitstatus "ERROR: Something went wrong while creating/filling the graph table." "Graph table created and filled."

PGPASSWORD=$password psql $PSQLOPTS $newdb -f ./sql_scripts/comment.sql > /dev/null 2>&1
check_exitstatus "ERROR: Something went wrong while creating/filling the comment table." "Comment table created and filled."

PGPASSWORD=$password psql $PSQLOPTS $newdb -f ./sql_scripts/embedding.sql > /dev/null 2>&1
check_exitstatus "ERROR: Something went wrong while creating/filling the embedding table." "Embedding table created and partly filled."

export PSQLOPTS
export password
#
./fill_embeddings.sh ./sql_scripts/embeddings.txt $newdb > /dev/null 2>&1
check_exitstatus "ERROR: Something went wrong while filling embedding table with embeddings." "Embedding table filled with embeddings."

PGPASSWORD=$password psql $PSQLOPTS $newdb -f ./sql_scripts/calculate_invariant.sql > /dev/null 2>&1
check_exitstatus "ERROR: Something went wrong while creating/filling the calculate_invariant table." "Calculate_invariant table created and filled."

PGPASSWORD=$password psql $PSQLOPTS $newdb -f ./sql_scripts/invariant.sql > /dev/null 2>&1
check_exitstatus "ERROR: Something went wrong while creating/filling the invariant table." "Invariant table created and filled."

PGPASSWORD=$password psql $PSQLOPTS $newdb -f ./sql_scripts/graph_invariant.sql > /dev/null 2>&1
check_exitstatus "ERROR: Something went wrong while creating/filling the graph_invariant table." "Graph_invariant table created and filled."

PGPASSWORD=$password psql $PSQLOPTS $newdb -f ./sql_scripts/clean_up.sql > /dev/null 2>&1
check_exitstatus "ERROR: Something went wrong while removing the original tables." "Original tables removed."

PGPASSWORD=$password psql $PSQLOPTS $newdb -f ./sql_scripts/reset-sequence-function.sql > /dev/null 2>&1
check_exitstatus "ERROR: Something went wrong while creating the script to reset SQL sequences." "Created script to reset SQL sequences."

PGPASSWORD=$password psql $PSQLOPTS $newdb -f ./sql_scripts/reset-sequences.sql > /dev/null 2>&1
check_exitstatus "ERROR: Something went wrong while calling the reset-sequences script." "Reset-sequences script called."

