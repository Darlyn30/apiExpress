const express = require('express');
const debug = require('debug')('app:main');
const app = express();

const { Config } = require('./src/config/index');
const { ProductsAPI } = require('./src/products/index');

app.use(express.json());

// modules

ProductsAPI(app);

app.listen(Config.port, () => {
    debug(`Servidor escuchando en el puerto ${Config.port}`);
});