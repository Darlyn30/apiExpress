const debug = require('debug')('app:module-products-controller')
const { json } = require('express');
const { ProductsServices } = require('./services');
const { ObjectId } = require('mongodb');

module.exports.ProductsController = {
    getProducts: async (req, res) => {
        try {
            let products =await  ProductsServices.getData();
            res.json(products);
        } catch(error) {
            debug(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },
    setProduct: async (req, res) => {
        try {
            const { body } = req;
            const insertedId = await ProductsServices.setData(body);
            res.json(insertedId);
        } catch(error) {
            debug(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },
    putProduct: async (req, res) => { // tengo un problema que es un error 404, en el postman, pero en el atlas actualiza
        const id = new ObjectId(req.params.id);
        const updateProduct = req.body;
        console.log(updateProduct);
        try {
            const success = await ProductsServices.putData(id, updateProduct);

            if(!success){
                return res.status(404).end();
            } 
            return res.status(200).json({message: "producto actualizado"});
        } catch(error) {
            return res.status(500).json({error: "internal server error"});
        }

        //IF IT WORKS DON'T TOUCH IT XD
    },
    deleteProduct: async (req, res) => {
        const id = new ObjectId(req.params.id);

        try {
            const success = await ProductsServices.DeleteData(id);

            if(!success){
                return res.status(404).end();
            }
            return res.status(200).json({message: "producto eliminado"});
        } catch(error) {
            return res.status(500).json({error: "internal server error"});
        }
    }
};