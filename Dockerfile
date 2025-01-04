# Use an official Node.js runtime as a parent image for the build stage
FROM node:22-slim AS build

# Set the working directory inside the container
WORKDIR /app

# Copy just the package.json and package-lock.json first
COPY ./react-app/package.json ./react-app/package-lock.json ./

# Install React app dependencies
RUN npm install

# Copy the rest of the React app source code
COPY ./react-app ./

# Build the React app
RUN npm run build


# Use an official Node.js runtime as a parent image for the express server
FROM node:22-slim AS express

# Set the working directory inside the container
WORKDIR /app

# Copy your Express app source code
COPY ./package.json ./package-lock.json ./

# Install Express app dependencies
RUN npm install

# Copy the rest of the Express code
COPY ./ ./

# Copy the built React app from the build stage
COPY --from=build /app/build ./react-app/build

RUN npx knex migrate:latest --knexfile ./config/knexfile.js --env main
RUN npx knex seed:run --knexfile ./config/knexfile.js --env main

# Expose the port on which the Express app will run
EXPOSE 49152

# Command to run the Express server
CMD ["node", "./bin/www"]