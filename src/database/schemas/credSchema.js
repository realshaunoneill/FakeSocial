const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    id: {type: String},
    username: {type: String},
    password: {type: String},
    service: {type: String},
    date: {type: Date}
});