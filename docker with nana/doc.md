## DOCKER network

- `docker network ls` (list all the networks)
- `docker network create NAME` (creates network)
- ` docker run -p 27017:27017 -d -e -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=password --name mongodb -network mongo-network mongo`
