FROM node:18

WORKDIR /

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run doc

EXPOSE 3000

CMD ["npm", "run", "dev"]
