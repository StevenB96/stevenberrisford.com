# Node Boilerplate

## Knex commands
- npx knex migrate:latest --knexfile ./config/knexfile.js --env main
- npx knex migrate:make [x] --knexfile ./config/knexfile.js --env main
- npx knex seed:make [x] --knexfile ./config/knexfile.js --env main
- npx knex seed:run --knexfile ./config/knexfile.js --env main

## pm2 commands
- pm2 restart app_name/pid
- pm2 reload app_name/pid
- pm2 stop app_name/pid
- pm2 delete app_name/pid

## Docker commands

### Docker Image Commands

1. **Build an Image**: 
   docker build -t <image_name>:<tag> <path>
   Builds a Docker image from a Dockerfile located at the specified path.

2. **List Images**:
   docker images
   Lists all the images available on your local Docker engine.

3. **Remove an Image**:
   docker rmi <image_name>:<tag>
   Deletes a specified image from your local storage.

4. **Tag an Image**:
   docker tag <source_image>:<tag> <target_image>:<tag>
   Creates a new tag for an existing image.

### Docker Container Commands
5. **Run a Container**:
   docker run <options> <image_name>:<tag>
   Runs a new container from a specified image.

6. **List Running Containers**:
   docker ps
   Shows all currently running containers.

7. **List All Containers**:
   docker ps -a
   Shows all containers, including stopped ones.

8. **Stop a Running Container**:
   docker stop <container_name_or_id>
   Stops a specified running container gracefully.

9. **Start a Stopped Container**:
   docker start <container_name_or_id>
   Starts a previously stopped container.

10. **Remove a Container**:
    docker rm <container_name_or_id>
    Deletes a specified container.

11. **View Container Logs**:
    docker logs <container_name_or_id>
    Displays logs from a specific container.

12. **Execute a Command in a Running Container**:
    docker exec -it <container_name_or_id> <command>
    Runs a command in a running container (e.g., starting a shell).

### Docker Network Commands
13. **List Networks**:
    docker network ls
    Lists all Docker networks available on your system.

14. **Create a Network**:
    docker network create <network_name>
    Creates a new Docker network.

15. **Connect a Container to a Network**:
    docker network connect <network_name> <container_name_or_id>
    Connects a container to an existing network.

### Docker Volume Commands
16. **List Volumes**:
    docker volume ls
    Lists all Docker volumes available on your system.

17. **Create a Volume**:
    docker volume create <volume_name>
    Creates a new Docker volume.

18. **Remove a Volume**:
    docker volume rm <volume_name>
    Deletes a specified volume.

### Docker Compose (if used)
19. **Start Services**:
    docker-compose up
    Starts the services defined in a `docker-compose.yml` file.

20. **Stop Services**:
    docker-compose down
    Stops and removes all services defined in the `docker-compose.yml` file.

### Other Useful Commands
21. **View Docker System Information**:
    docker info
    Displays system-wide information about Docker.

22. **Check Docker Version**:
    docker --version
    Shows the version of Docker installed.

23. **Prune Unused Objects**:
    docker system prune
    Cleans up unused containers, networks, images, and optionally, volumes.

24. **Inspect a Container/Image/Network**:
    docker inspect <container_name_or_id|image_name|network_name>
    Returns detailed information about a specified container, image, or network.
- docker build --no-cache -t stevenberrisford.com:test ./