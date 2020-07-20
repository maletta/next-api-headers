from node:10.16.1-alpine

WORKDIR /app

# Install app dependencies
COPY package.json ./
COPY /pages/ ./pages/
COPY /utils/ ./utils/
COPY .env ./

RUN npm Install

EXPOSE 3000
CMD ["npm", "run", "dev"]