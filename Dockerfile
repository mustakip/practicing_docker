FROM node:alpine

COPY . /myapp

WORKDIR /myapp

RUN npm install

EXPOSE 3000

CMD ["npm","start"]