const mongoose = require('mongoose');
require('dotenv').config();
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

const connect = ()=>{
    return mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.z8q8a.mongodb.net/meesho?retryWrites=true&w=majority`);
}

module.exports = connect;
