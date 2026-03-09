# Build stage
FROM node:22 as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Give execute permission to local binaries
RUN chmod -R 755 /app/node_modules/.bin

# Use npx to run vite build
RUN npx vite build

# Production stage: nginx
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]