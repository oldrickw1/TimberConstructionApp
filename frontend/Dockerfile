# Stage 1: Build the application
FROM node:18-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Build the application for production
RUN npm run build

# Stage 2: Serve the application using a lightweight web server (Nginx)
FROM nginx:alpine

# Copy the built files from the previous stage to the Nginx web server's default directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the default Nginx port
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]

