FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

RUN npm i -g serve

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]