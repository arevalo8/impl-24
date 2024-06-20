# Usa una imagen base de Node.js
FROM node:16-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json 
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Asegura que los binarios tengan los permisos adecuados
RUN chmod +x /app/node_modules/.bin/tsc

# Copia el resto de los archivos del proyecto
COPY . .

# Compila la aplicación TypeScript
RUN npm run build

# Expone el puerto en el que la aplicación escuchará
EXPOSE 3000

# Comando para iniciar tu aplicación
CMD ["node", "dist/index.js"]
