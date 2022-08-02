# build environment
FROM node:16.13.0-alpine as build
WORKDIR .
ENV PATH node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install react-scripts -g --silent
COPY . .
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build ./build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
