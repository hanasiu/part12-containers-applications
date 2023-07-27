# The first FROM is now a stage called build-stage
FROM node:20.3.1 AS dev-stage
WORKDIR /usr/src/app

COPY . .

RUN npm install

# ENV REACT_APP_BACKEND_URL=http://localhost:3000/api
# ENV PORT=3001

# npm start is the command to start the application in development mode
CMD ["npm", "start"]