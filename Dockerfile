FROM node:22 as builder

ARG VITE_REACT_API_URL=http://localhost:8080

WORKDIR /app
COPY package.json .
CMD ["sh", "-c", "echo VITE_REACT_API_URL='\"'$VITE_REACT_API_URL'\' > /app/.env" ]

RUN npm install
COPY . .
RUN npm run build
FROM nginx:alpine
COPY conf.txt /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html