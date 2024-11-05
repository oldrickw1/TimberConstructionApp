# Use a base image with Java
FROM openjdk:17-slim AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the Maven or Gradle build files
COPY .mvn/ .mvn
COPY mvnw .
COPY pom.xml .
COPY src ./src


# Build the application
RUN ./mvnw clean package -DskipTests

# Use a smaller base image for the final application
FROM openjdk:17-slim

# Set the working directory for the application
WORKDIR /app

# Copy the jar file from the build stage
COPY --from=build /app/target/*.jar app.jar

# Expose the application port (default 8080)
EXPOSE 8080

# Command to run the application
ENTRYPOINT ["java", "-jar", "app.jar"]


