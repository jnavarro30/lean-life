# Official Node.js from Alpine linux
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package.json .
COPY package-lock.json .

# Install dependencies using npm ci
RUN npm i

# Copy the rest of the application code
COPY . .

EXPOSE 3000

# Specify the command to run the application
CMD ["npm", "run", "start"]
