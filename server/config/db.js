const mongoose = require('mongoose');

require('dotenv').config();

const DB_PASSWORD = process.env.DB_PASSWORD || "sansarapur";

const connect = ()=>{
    return mongoose.connect(`mongodb+srv://mrahul:${DB_PASSWORD}@cluster0.wbced.mongodb.net/meesho?retryWrites=true&w=majority`);
}

module.exports = connect;

//mongodb+srv://mrahul:${DB_PASSWORD}>@cluster0.wbced.mongodb.net/meesho?retryWrites=true&w=majority
