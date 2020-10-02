FROM node:alpine

WORKDIR /usr/nodeapp/

COPY ./package.json ./

RUN  yarn install
COPY ./  ./
CMD [ "yarn", "start" ]