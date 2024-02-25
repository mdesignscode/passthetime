FROM node:20
WORKDIR /app

# Install Node.js and npm
RUN apt-get update && apt-get install -y curl bash

COPY . .

RUN npm install
RUN npm build

ARG PORT
EXPOSE ${PORT:-3000}

CMD ["npm", "start"]
