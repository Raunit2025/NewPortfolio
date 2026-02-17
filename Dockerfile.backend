# Dockerfile.backend
FROM node:20-alpine

WORKDIR /app

# Copy package files and install production dependencies only
COPY package*.json ./
RUN npm ci --only=production

# Copy the server file
COPY server.js .

# Expose the port
EXPOSE 5000

# Start the server
CMD ["node", "server.js"]