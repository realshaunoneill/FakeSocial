const index = require('../index');

const mongoose = require('mongoose');
let db = exports.db = null;

exports.connect = () => {
    try {

        mongoose.connect(index.databaseUrl, {
            autoReconnect: true,
            connectTimeoutMS: 30000,
            socketTimeoutMS: 30000,
            keepAlive: 120,
            poolSize: 100
        });

        db = mongoose.connection;
        mongoose.Promise = global.Promise;

        loadSchemas();

        db.on('err', err => {
            console.error(`An error occurred starting the database, Error: ${err.stack}`);
            return false;
        });

        db.once('open', () => {
            return true;
        });

    } catch (err) {
        console.error(`Error connecting to the database, Error: ${err.stack}`);
    }
};

exports.getModels = () => {
    return mongoose.models;
};

exports.getConnection = () => {
    return mongoose.connection;
};

function loadSchemas() {
    const credSchema = require('./schemas/credSchema');

    mongoose.model('Creds', credSchema);
}
