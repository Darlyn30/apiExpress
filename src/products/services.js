//aqui vamos a gestionar los datos y la comunicacion a la db

// const { ObjectId } = require('mongodb');

const { Database } = require('../db/index');


const COLLECTION = 'products';

const getData = async () => {
    const collection = await Database(COLLECTION);
    return await collection.find({}).toArray();

};


// const getById = async (id) => {
//     const collection = await Database(COLLECTION);
//     return collection.findOne({ _id: ObjectId(id) });
// };

const setData = async (product) => {
    const collection = await Database(COLLECTION);
    let result = collection.insertOne(product);
    return result.insertedId;
}

const putData = async (id, updateProduct) => {
    const collection = await Database(COLLECTION);
    let result = collection.updateOne({_id: id}, {$set: updateProduct});

    return result.matchedCount > 0;
}

const DeleteData = async (id) => {
    const collection = await Database(COLLECTION);
    let result = await collection.deleteOne({_id: id});
    return result.deleteCount > 0;
}


module.exports.ProductsServices = {
    getData,
    setData,
    putData,
    DeleteData
};