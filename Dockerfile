FROM node:20
WORKDIR /app

COPY . .

RUN npm -v
RUN npm install
RUN npm run build

ARG PORT
EXPOSE ${PORT:-3000}

CMD ["npm", "run start"]
