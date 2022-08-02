#!/bin/bash
# Command to restore the database dump ('hogdb.bak') to a database called 'hogdb'.

username='hoguser'
password='admin'

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

PGPASSWORD=$password createdb -U $username new_hogdb -E UTF8
PGPASSWORD=$password pg_restore -d new_hogdb -U $username new_hogdb.bak
