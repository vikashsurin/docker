# #step : 1
# FROM alpine


# #step : 2 install a software
# RUN echo 'https://dl-cdn.alpinelinux.org/alpine/v3.9/main' >> /etc/apk/repositories
# #RUN echo 'https://dl-cdn.alpinelinux.org/alpine/v3.9/community' >> /etc/apk/repositories
# RUN echo 'http://dl-3.alpinelinux.org/alpine/edge/testing' > /etc/apk/repositories

# RUN apk update
# RUN apk add  mongodb=4.0.5-r0
# RUN apk add isl

# #step : 2.5 configure the software
# VOLUME [ "/data/db" ]
# WORKDIR /data
# EXPOSE 27017


# #step : 3 set default commands
# CMD [ "mongodb" ]
# # 
FROM apline
RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.6/main' >> /etc/apk/repositories
RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.6/community' >> /etc/apk/repositories

RUN apk update
RUN apk add mongodb=3.4.4-r0

VOLUME ["/data/db"]
WORKDIR /data
EXPOSE 27017