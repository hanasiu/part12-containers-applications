FROM node:20.5.0-bullseye-slim
  
WORKDIR /usr/src/app

COPY . .
RUN npm install

ENV DEBUG=todo-backend:*
  
USER node

CMD ["npm", "run", "dev"]