# Step 1: Build the app in a node.js environment
FROM node:20.4.0 as build-step

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Step 2: Serve the app from Nginx
FROM nginx:1.19.0-alpine as prod-stage
COPY --from=build-step /app/dist/frontend /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]