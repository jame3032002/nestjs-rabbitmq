FROM node:20.11.1-alpine as build

WORKDIR /app

COPY ./package.json .
RUN npm install
COPY . .
RUN npm run build


FROM node:20.11.1-alpine
WORKDIR /app
COPY package.json ./
RUN npm install --only=production
COPY --from=build /app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/main"]
