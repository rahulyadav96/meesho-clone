const express = require('express');
const connect = require('./config/db');
require('dotenv').config();

const productController = require("./controllers/product.controller");
const {signIn,signUp} = require('./controllers/auth.controller');
const userController = require('./controllers/user.controller');

const app = express();

const PORT = process.env.PORT || 3001

app.use(express.json());

app.use('/products', productController);
app.use('/signin', signIn);
app.use('/signup',signUp);
app.use('/users', userController)


app.listen(PORT, async()=>{
    await connect();
    console.log(`server is running on : ${PORT}`);
})