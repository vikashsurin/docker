# exec flags
- --detach , -d		Detached mode: run command in the background
- --detach-keys		Override the key sequence for detaching a container
- --env , -e		API 1.25+
   Set environment variables
- --interactive , -i		Keep STDIN open even if not attached
- --privileged		Give extended privileges to the command
- --tty , -t		Allocate a pseudo-TTY
- --user , -u		Username or UID (format: <name|uid>[:<group|gid>])
- --workdir , -w		API 1.35+
    Working directory inside the container

# how to exec ?
- docker exec -it d63a65c79d09 bash or sh
- ctrl + d  to exit from mongoshell

# start container 
- docker start id

# stop container 
- docker stop  ( stop the working program )
- docker kill (entire kill the program from the root)
s
# list containers 
- docker ps (show the running containers)
- docer ps -a ( show all the containers )

# prune
- docker prune image 
- docker prune image -a
- docker container prune -a