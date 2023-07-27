FROM node:20.5.0-bullseye-slim

ENV NODE_ENV production
  
WORKDIR /usr/src/app

COPY --chown=node:node . .
RUN npm ci --only=production

ENV DEBUG=todo-backend:*
  
USER node
CMD ["npm", "start"]