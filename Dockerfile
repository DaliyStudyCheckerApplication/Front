FROM node:16.17.0
WORKDIR /Users/jaewon/Documents/Front

COPY package.json .
ADD . .
RUN npm install
EXPOSE 8080
CMD ["npm","run","serve"]