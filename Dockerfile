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
    "--token=0542895c-7735-41b7-bfcb-de50fe59b2c9", \
    "--api-key=0542895c-7735-41b7-bfcb-de50fe59b2c9", \
    "--target=http://localhost:80/webhook"]

