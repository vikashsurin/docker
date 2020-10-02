# first part 
- create index.js also package.json

# second part - containerizing project in docker
- bring base image  (node)
- create working dir 
- run installer command
- default commamd
- docker run vikashsurin/nodeapp

## browser cannot acces the nodeapp container .
-  -p  (port)
- docker run -p browserport:server port vikashsurin/nodeapp 
- ex:- docker run -p 8080:8000 vikashsurin/nodeapp

# performance 
- 