#!/bin/bash
gunzip hogdb.bak.gz
./restore_old_hog.sh
./create_new_database.sh hogdb new_hogdb
