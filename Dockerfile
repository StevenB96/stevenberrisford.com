# Stage 1: Build the React app
FROM node:16 AS build

# Set the working directory
WORKDIR ./app

# Copy the source code for the React app
COPY ./react-app ./react-app

# Change to the react-app directory and build the React app
RUN cd ./react-app && npm install && npm run build

# Stage 2: Set up Node.js server
FROM node:16

# Set the working directory for the server
WORKDIR ./app

# Copy the rest of the source code
COPY ./ ./

# Copy the source code for the React app
COPY --from=build /app/react-app/build /app/react-app/build

# Expose the port for the server
EXPOSE 3000

# Install node modules
RUN npm install

# Clear and write db
RUN rm -rf ./db && mkdir ./db
RUN npx knex migrate:latest --knexfile ./config/knexfile.js --env main
RUN npx knex seed:run --knexfile ./config/knexfile.js --env main

# Start the Node.js server
CMD ["npm", "run", "start"]