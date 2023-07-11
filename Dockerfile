FROM node:16-alpine

RUN mkdir -p /usr/app/
WORKDIR /usr/app

COPY ./ ./

RUN npm install
RUN npm run build

EXPOSE 9999
CMD [ "npm", "start", "--", "-p", "9999" ]
