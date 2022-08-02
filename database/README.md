# Database
To run the Docker image (provided via other medium), follow the following procedure.
First ``cd`` into the directory where you placed the tar file.
```
docker load < docker-hogdb.tar
docker run -d --name <CONTAINER_NAME> svendh/hog
docker exec -it <CONTAINER_NAME> /bin/bash
```
This will open a shell inside the Docker container. 
To restore the original database from the dump, run the following script
```
./restore_dh.sh
```
To create the new database from the old one, run the following script
```
./create_new_database.sh hogdb <NEW_DB_NAME>
```
To run the test scripts to verify the correct creation of the new database, run the following script
```
./test_all.sh hogdb <NEW_DB_NAME>
