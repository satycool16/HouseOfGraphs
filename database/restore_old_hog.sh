#!/bin/bash
# Command to restore the database dump ('hogdb.bak') to a database called 'hogdb'.

# Additional parameters for psql if needed:
PSQLOPTS="-U postgres"

createdb $PSQLOPTS hogdb -E UTF8
pg_restore --no-privileges --no-owner -d hogdb $PSQLOPTS hogdb.bak
