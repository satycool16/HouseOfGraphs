/*
This SQL script creates a function that resets the sequences in the database that is now filled with data.
This means the original IDs are kept in the table and newly created entries will autogenerate the new ID starting
from the maximum value of the current IDs in the table.
Based on code from
    - http://dbadailystuff.com/2013/12/03/setval-for-all-sequences-in-a-schema
    - https://wiki.postgresql.org/wiki/Fixing_Sequences
*/

CREATE OR REPLACE FUNCTION reset_sequences(schema_name NAME)
  RETURNS VOID AS $$
DECLARE
  row_data RECORD;
  sql_code TEXT;
BEGIN
  FOR sql_code IN
  SELECT 'SELECT SETVAL('
         || quote_literal(N.nspname || '.' || S.relname)
         || ', MAX(' || quote_ident(C.attname) || ') ) FROM '
         || quote_ident(N.nspname) || '.' || quote_ident(T.relname)
         || ';' AS sql_code
  FROM pg_class AS S
    INNER JOIN pg_depend AS D ON S.oid = D.objid
    INNER JOIN pg_class AS T ON D.refobjid = T.oid
    INNER JOIN pg_attribute AS C ON D.refobjid = C.attrelid AND D.refobjsubid = C.attnum
    INNER JOIN pg_namespace N ON N.oid = S.relnamespace
  WHERE S.relkind = 'S' AND N.nspname = schema_name
  ORDER BY S.relname
  LOOP
    EXECUTE sql_code;
  END LOOP;
END; $$ LANGUAGE plpgsql;

