FROM node:20
WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

ARG PORT
EXPOSE ${PORT:-3000}

RUN echo "app dir"
RUN echo :::::
RUN echo :::::
RUN ls

CMD ["npm", "run", "start"]
