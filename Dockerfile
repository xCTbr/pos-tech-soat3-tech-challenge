FROM node:18

WORKDIR /

RUN npm install -g @webhooksite/cli

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run doc

EXPOSE 3000

CMD ["npm", "run", "dev", \
    "&&", \
    "whcli", "forward", \
    "--token=7f2bc0ac-6791-46b0-8101-6ad5149322e4", \
    "--api-key=7f2bc0ac-6791-46b0-8101-6ad5149322e4", \
    "--target=http://localhost:80/webhook"]

#CMD ["npm", "run", "dev"]

