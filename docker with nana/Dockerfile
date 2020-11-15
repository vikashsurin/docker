FROM node:13-alpine

ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PWD=password

# RUN FOR RUNNING LINUX COMMANDS INSIDE DOCKER IMAGE.
RUN mkdir -p /home/app

COPY . /home/app

# entry point for docker file.
# multiple RUN commands but single CMD command.
CMD  ["node","server.js"]