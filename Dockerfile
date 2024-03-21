# Base image
FROM node:14

WORKDIR /COVIDMAP

COPY . /COVIDMAP

RUN npm install --legacy-peer-deps

CMD ["npm", "start"]
