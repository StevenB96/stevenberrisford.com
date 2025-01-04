Node Boilerplate Command Reference

This README provides a comprehensive command reference for managing a Node.js boilerplate application, including database
 migrations with Knex, process management with PM2, and Docker commands for containerization.

Table of Contents

1. Knex Commands
2. PM2 Commands
3. Docker Commands
4. Docker Compose Commands

---

1. Knex Commands

- Run Migrations:
  npx knex migrate:latest --knexfile ./config/knexfile.js --env main

- Create a Migration:
  npx knex migrate:make [migration_name] --knexfile ./config/knexfile.js --env main

- Create a Seed File:
  npx knex seed:make [seed_name] --knexfile ./config/knexfile.js --env main

- Run Seeds:
  npx knex seed:run --knexfile ./config/knexfile.js --env main

---

2. PM2 Commands

- Restart an Application:
  pm2 restart <app_name|pid>

- Reload an Application:
  pm2 reload <app_name|pid>

- Stop an Application:
  pm2 stop <app_name|pid>

- Delete an Application:
  pm2 delete <app_name|pid>

---

3. Docker Commands

- Build an Image:
  docker build -t <image_name>:<image_tag> <image_path>

- Run a Container:
  docker run <options> <image_name>:<image_tag>  

- List Images:
  docker images

- List All Containers:
  docker ps -a

- Stop a Running Container:
  docker stop <container_name_or_id>

- Start a Stopped Container:
  docker start <container_name_or_id>

- Remove an Image
  docker rmi <image_name>:<image_tag>

- Remove a Container:
  docker rm <container_name_or_id>

- Inspect a Container/Image/Network:
  docker inspect <container_name_or_id|image_name|network_name>

- Prune Unused Objects
  docker system prune

---

4. Docker Compose Commands

- Start Services:
  docker-compose up

- Stop Services:
  docker-compose down

---

This README is intended to assist developers in understanding and using the essential commands for managing a Node.js
 application efficiently. Feel free to modify or extend this document as necessary for your specific application needs.
