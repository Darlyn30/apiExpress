const express = require('express');

const {ProductsController } = require('./controller');

const router = express.Router();


module.exports.ProductsAPI = (app) => {
    router.get('/',ProductsController.getProducts)
    .post('/', ProductsController.setProduct)
    .put('/:id', ProductsController.putProduct)
    .delete('/:id', ProductsController.deleteProduct);

    app.use('/api/products', router);
};

