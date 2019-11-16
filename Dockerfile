FROM node:10-alpine

WORKDIR /app

COPY . .
RUN npm install

EXPOSE 3333

CMD ["npm", "start"]