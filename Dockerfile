# the official node.js base image
FROM node:18-alpine

# setting up the working directory 
WORKDIR /

# COPY THE PACKAGE.JSON & INSTALLATION DEPENDANCIES
COPY package*.json ./

# COPY ALL THE APP FILES
COPY . .

#EXPOSE THE PORT
EXPOSE 3000

# START THE APPLICATION
CMD ["node", "app.js"]