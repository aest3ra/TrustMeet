# Node 이미지 사용
FROM node:20
WORKDIR /app
COPY client ./client
WORKDIR /app/client
RUN npm install

EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"] 