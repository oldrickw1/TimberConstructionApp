# Use a base image with Java (e.g., OpenJDK)
FROM openjdk:21-jdk

# Set the working directory in the container
WORKDIR /app

# Copy the JAR file from your local environment to the Docker container
COPY target/projects-0.0.1-SNAPSHOT.jar /app/app.jar

# Expose the port the application runs on (e.g., 8080 for Spring Boot)
EXPOSE 8080

# Run the JAR file
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
