require('dotenv').config();

// esto es para traer todas las variables de entorno encontradas en el file .env

module.exports.Config = {
    port: process.env.PORT,
    mongoUrl: process.env.MONGO_URL,
    mongoDbName: process.env.MONGO_DB_NAME
};