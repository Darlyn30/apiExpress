const { MongoClient } = require('mongodb');
const debug = require('debug')('app:module-database');


const { Config } = require('../config/index');

var conn = null;


module.exports.Database = (collection) => new Promise( async (resolve, reject) => {
    try {

        // aplicamos patron singleton para que solo se haga una sola instancia de la db
        if(!conn){
            const client = new MongoClient(Config.mongoUrl);
            conn = await client.connect();
            debug('Nueva conexion realizada con MongoDB Atlas');
        }
        debug('reutilizando conexion');
        const db = conn.db(Config.mongoDbName);
        resolve(db.collection(collection));

    } catch(error) {
        reject(error);
    }
});