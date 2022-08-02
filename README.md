# HoG
# Easy set-up (starting from new database)
(0) Clone/pull the GitHub repository. Go into the database folder.
```
cd HoG/database
```
and unzip the new database dump
```
gunzip new_hogdb.bak.gz
```

(1) First the database needs to be extracted. This might take a while.
```
./restore_new_hog.sh
```

If the error: 'FATAL: Peer authentication failed for user "hoguser"' appears:
 - Go to``sudo nano /etc/postgresql/<VERSION>/main/pg_hba.conf`` and add ``local all hoguser md5`` above ``local all all peer``.
 - Restart the postgres service: ``sudo service postgresql restart``
 - Execute (1) again

(2) The back-end can be started by opening ``hog-backend`` in IntelliJ and running the``HogBackendApplication.java`` file located in ``src/main/java/org.grinvin.hog``. This will get the back-end up and running.
Java 17 is needed for this! (This may also need to be specified in the Project Structure in IntelliJ.) 
It is also possible to run the back-end tests located in ``src/test/java/org.grinvin.hog/database``.

(3) The front-end can be started by opening ``hog-frontend`` in IntelliJ and opening a terminal to run ``npm install`` and ``npm start``. A window should open in the browser on ``localhost:3000``. Changing the URL to ``localhost:3000/users`` should display a list of users. (Back-end needs to be on for this!)

# Full set-up (starting from old database)
(0) Clone/pull the GitHub repository. Go into the database folder.
```
cd HoG/database
```
and unzip the original database dump 
```
gunzip hogdb.bak.gz
```

(1) First the database needs to be extracted. This might take a while.
```
./restore_old_hog.sh 
```

If the error: 'FATAL: Peer authentication failed for user "postgres"' appears:
 - Go to``sudo nano /etc/postgresql/<VERSION>/main/pg_hba.conf`` and change the database administrative login by Unix domain socket to ``local all postgres trust``
 - Restart the postgres service: ``sudo service postgresql restart``
 - Execute (1) again

(2) Create a database to use for extracting the embedding data.
```
./prepare_embeddings.sh
```

(3) Create the embeddings.txt file by opening ``hibernate_embeddings`` in IntelliJ and running the Runner.java file located in ``src/test/java``. This will create a text file inside this repository.

(4) Move the newly created file
```
mv hibernate_embeddings/embeddings.txt sql_scripts
```

(5) Create the new database
```
./create_new_database.sh hogdb new_hogdb
```
Running  ``./test_all hogdb newhogdb 0`` will execute the test scripts to do some basic checks to verify if the copying and filling of the new database was executed successfully. Changing the last parameter to ``1`` will also execute the tests that take a (very) long while to run.

(6) The back-end can be started by opening ``hog-backend`` in IntelliJ and running the``HogBackendApplication.java`` file located in ``src/main/java/org.grinvin.hog``. This will get the back-end up and running.
Java 17 is needed for this! (This may also need to be specified in the Project Structure in IntelliJ.) 
It is also possible to run the back-end tests located in ``src/test/java/org.grinvin.hog/database``.

(7) The front-end can be started by opening ``hog-frontend`` in IntelliJ and opening a terminal to run ``npm install`` and ``npm start``. A window should open in the browser on ``localhost:3000``. Changing the URL to ``localhost:3000/users`` should display a list of users. (Back-end needs to be on for this!)


