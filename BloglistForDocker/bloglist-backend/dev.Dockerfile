FROM node:20.3.1
  
WORKDIR /usr/src/app
COPY --chown=node:node . .
RUN npm install
USER node

CMD ["npm", "run", "dev"]