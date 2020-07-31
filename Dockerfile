from node:10.16.1-alpine

WORKDIR /app

# Install app dependencies
COPY package.json ./
COPY /pages/ ./pages/
COPY /src/ ./src/

RUN npm install

EXPOSE 80
CMD ["npm", "run", "dev"]
