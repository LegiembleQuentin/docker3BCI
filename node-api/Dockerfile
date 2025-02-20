FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copier les fichiers du projet
COPY package.json package-lock.json ./
RUN npm install --only=production

# Copier le reste des fichiers
COPY . .

# Exposer le port 3000
EXPOSE 3000

# Lancer l'application
CMD ["node", "server.js"]