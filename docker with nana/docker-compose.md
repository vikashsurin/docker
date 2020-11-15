## DOCKER COMPOSE

-`docker-compose -f mongo.yaml up` (-f= file)

- all the commands in a single file to exec multiple run commands.

```
   version: '3'
   services:
        mongodb: CONTAINER-NAME
            image: mongo

        ports:
            -27017:27017
        environment:
            - MONGO_USERNAME= admin

```

```
   version: '3'
   services:
        mongo-express: CONTAINER-NAME
            image: mongo-express

        ports:
            -8080:8080
        environment:
            - ME_CONFIG_MONGODB_A= admin

```
