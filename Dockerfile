FROM node:14

LABEL version="1.0"
LABEL maintainer = ["nishantsharma9358@gmail.com"]

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]
RUN ls

COPY . .
RUN npm install 

EXPOSE 3000
CMD ["npm", "start"]