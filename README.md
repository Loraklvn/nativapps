# nativapps

# Notas
**La API hosteada se encuentra en la siguiente URL:** https://nativapps.onrender.com

La base de datos está hosteada de manera remota, no tendrás que preocuparte de iniciar una base de datos local.
Solo sigue las insttrucciones.

## Introdución
Este es projecto es una API de prueba, la cual se basa en una aplicación de reserva de vuelos que permite a los usuarios buscar
vuelos, seleccionar uno y realizar una reserva.

## Instrucciones para correr el projecto en local.

### 1. Clona el repositotio
Abre la terminal y corre el siguiente comando: git clone https://github.com/Loraklvn/nativapps.git
### 2. Navega al directorio del projecto
e.g: `cd nativapps`
### 3. Installa las dependencias 
En el directorio del projecto corre el comando `npm install`
### 4.Crea un archivo .env en el directorio principal del projecto y agrega las siguientes variables:
APP_PORT=4000
DB_CONNECTION_HOST=ep-lingering-truth-171690-pooler.us-east-2.aws.neon.tech
DB_CONNECTION_PORT=5432
DB_CONNECTION_DB_NAME=neondb
DB_CONNECTION_USERNAME=Loraklvn
DB_CONNECTION_DB_PASSWORD=IOyiuF69Yofa
ACCESS_TOKEN_SECRET=trwyutyiruiorio7opklfmcmjvtfweujelvljvhgkvoijhtijogjighhjjhmpku
FRONT_END_APP_URI=http://localhost:5173
### 5. Consruye el projecto
Corre `npm run build` para compilar el codigo a JavaScript
### 6. Inicia el projecto
Corre el comando `npm start` y el projecto va a subir en el puerto 4000
Para acceder a la API local solo debes apuntar al puerto 4000

