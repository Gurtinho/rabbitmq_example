FROM node:20-alpine3.19

WORKDIR /producer

RUN apk add bash git

RUN rm -rf ./node_modules
RUN rm -rf package.lock.json
COPY package.json .
RUN npm install

COPY . .

COPY scripts/entrypoint.sh /producer/scripts/entrypoint.sh
RUN chmod +x /producer/scripts/entrypoint.sh

CMD [ "npm", "run", "start" ]