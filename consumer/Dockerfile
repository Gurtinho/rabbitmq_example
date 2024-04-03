FROM node:20-alpine3.19

WORKDIR /consumer

RUN apk add bash git

RUN rm -rf ./node_modules
RUN rm -rf package.lock.json
COPY package.json .
RUN npm install

COPY . .

COPY scripts/entrypoint.sh /consumer/scripts/entrypoint.sh
RUN chmod +x /consumer/scripts/entrypoint.sh

CMD [ "npm", "run", "start" ]