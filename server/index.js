const express = require('express');
const connect = require('./config/db');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3001

app.listen(PORT, async()=>{
    await connect();
    console.log(`server is running on : ${PORT}`);
})