# BASIC DOCKER COMMANDS

- `docker start redis` (start the container)
- `docker stop redis` ( stops the container)
- `docker ps `

## docker run with `OPTIONS`

- `docker run -d redis` ( start docker in the detached mode i.e. process in background )
- `docker run redis` command pulls and start the container

## `PORT` binding

- `docker run -p6000:6333` (6333 listener)

## logs

- `docker logs id/name`

## naming

- `docker run --name redis-older redis:4.0`

## exec

- `docker exec -it id /bin/bash` (-it = interactinv terminal)
