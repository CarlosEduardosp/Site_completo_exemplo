# estágio de compilação
FROM node:lts-alpine as build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# estágio de produção
FROM nginx:stable-alpine as production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html

# acionando as configurações do ngnix.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# porta para produção 8080, e 80 para desenvolvimento
EXPOSE 8080 

CMD ["nginx", "-g", "daemon off;"]

