const express = require('express');
const path = require("path");

const connect = require('./config/db');
require('dotenv').config();

const productController = require("./controllers/product.controller");
const {signIn,signUp} = require('./controllers/auth.controller');
const userController = require('./controllers/user.controller');

const app = express();

const PORT = process.env.PORT || 3001

app.use(express.json());

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use('/products', productController);
app.use('/signin', signIn);
app.use('/signup',signUp);
app.use('/users', userController)

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });

app.listen(PORT, async()=>{
    await connect();
    console.log(`server is running on : ${PORT}`);
})