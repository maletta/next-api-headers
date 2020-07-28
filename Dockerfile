from node:10.16.1-alpine

WORKDIR /app

# Install app dependencies
COPY package.json ./
COPY /pages/ ./pages/
COPY /utils/ ./utils/

RUN npm install

EXPOSE 80
CMD ["npm", "run", "dev"]
