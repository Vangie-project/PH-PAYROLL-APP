# backend/Dockerfile
# Use Node 18 slim image
FROM node:18-slim

# Create app directory
WORKDIR /usr/src/app

# Copy package files and install deps first (better caching)
COPY package*.json ./

RUN npm ci --production

# Copy source
COPY src ./src

# Expose port (app listens on PORT env var default 3000)
ENV PORT=3000
EXPOSE 3000

# Run the app (package.json has "start": "node src/index.js")
CMD ["npm", "start"]
