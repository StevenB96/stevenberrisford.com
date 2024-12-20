# Stage 1: Build the React app ----------------------
FROM node:16 AS build

# Set the working directory
WORKDIR ./app

# Copy the source code for the React app
COPY ./react-app ./react-app

# Change to the react-app directory and build the React app
RUN cd ./react-app && npm install && npm run build

# Stage 2: Set up Node.js server ----------------------
FROM node:16 AS server

# Set the working directory for the server
WORKDIR ./app

# Copy the rest of the source code
COPY ./ ./

# Install node modules
RUN npm install

# Clear and write db
RUN rm -rf ./db && mkdir ./db
RUN npx knex migrate:latest --knexfile ./config/knexfile.js --env main
RUN npx knex seed:run --knexfile ./config/knexfile.js --env main

# Stage 3: Set up NGINX ----------------------
FROM nginx:alpine

# Set the working directory for the server
WORKDIR ./app

# Copy the Node.js server code
COPY --from=server ./ ./

# Copy the React app code
COPY --from=build ./react-app ./react-app

# Copy NGINX configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose ports
EXPOSE 80 443

# Start NGINX
CMD ["npm", "run", "start", "&&", "nginx", "-g", "daemon off;"]