# first part 
- create index.js also package.json

# second part - containerizing project in docker
- bring base image  (node)
- create working dir 
- run installer command
- default commamd
- ```docker run vikashsurin/nodeapp
  ```
## browser cannot connect to port directly , so
### configuration
-  -p  (port)
- docker run -p browserport:server port vikashsurin/nodeapp 
- ex:- 
  ```docker run -p 8080:8000 vikashsurin/nodeapp
  ```
# Run 
- build
- ```
     docker build -t vikashsurin/nodeapp:latest .
  ```
- if there is no error,

- ```
    docker run vikashsurin/nodeapp
  ```