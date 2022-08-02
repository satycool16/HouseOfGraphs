FROM openjdk:17
ARG JAR_FILE=target/*.jar
EXPOSE 8080
ENV LD_LIBRARY_PATH=/home/HoG/backend/lib/:/usr/local/lib
COPY ${JAR_FILE} /home/HoG/backend/backend.jar
COPY . /home/HoG/backend
ENTRYPOINT ["java", "-Djava.library.path=\"/home/HoG/backend/lib/\"", "-jar", "/home/HoG/backend/backend.jar"]
