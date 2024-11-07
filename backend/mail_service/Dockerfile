# Use a base image with Java for the build stage
FROM openjdk:21-jdk AS build

# Set the working directory in the container
WORKDIR /app

# Copy the Maven wrapper and pom.xml files
COPY .mvn/ .mvn
COPY mvnw .
COPY pom.xml .

# Copy the source code
COPY src ./src

# Build the application
RUN ./mvnw clean package -DskipTests

# Use a smaller base image for the final application
FROM openjdk:21-slim

# Set the working directory for the application
WORKDIR /app

# Copy the jar file from the build stage
COPY --from=build /app/target/*.jar app.jar

# Expose the port the application runs on (e.g., 8080 for Spring Boot)
EXPOSE 8081

# Command to run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
