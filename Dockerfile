# Specify bas image
FROM node:alpine

WORKDIR /usr/app

# Install Dependency
COPY ./package.json ./
RUN npm install
COPY ./ ./

# Run command
CMD ["npm", "start"]