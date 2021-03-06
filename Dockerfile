from node:10.16.1-alpine

WORKDIR /app

# Install app dependencies
COPY package.json ./
COPY next.config.js ./
COPY /pages/ ./pages/
# COPY /src/ ./src/
COPY .next/ ./.next/

RUN npm install

EXPOSE 80
CMD ["npm", "run", "next-start"]
