# HoG
# Set-up 
(0) Set up Docker network
```
sudo docker network create hog-network
```
(1) Create database container
```
sudo docker-compose -f docker-compose.database.yml up
```
(2) This creates a PostgreSQL container, but doesn't yet contain data. To create the data, go into the container and execute the provided script.
```
sudo docker ps
sudo docker exec -t <CONTAINER_ID> bash
```
Once inside the container, do the following. This could take some time, as the database is restored (e.g.10 minutes).
```
cd /home/HoG/database
./docker-init.sh
```
(3) Now the database container is up. Now start the back-end and front-end. FIrst the back-end needs to be compiled
```
cd hog-backend
./mvnw clean package -DskipTests
cd ..
sudo docker-compose -f docker-compose.backend.yml up
```
The back-end and front-end will be reachable, but CORS issues are present.
