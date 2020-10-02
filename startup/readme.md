# creating multiple containers with docker-compose
- 1.node container and 2.mongodb container (both will work together).

## Run 
   dir../startup/
 - ```
   docker-compose up --build
   ```
 - ```
    docker run vikashsurin/startup
   ```
 - this will create the containers and node and mongo server will be executed .
 - open new tab in browser and visit localhost:8000. 