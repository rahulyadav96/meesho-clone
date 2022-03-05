const mongoose = require('mongoose');
const sellerSchema = new mongoose.Schema({
    email:{type:Number, required:false , unique:true},
    password:{type:String, required:true},
    shopName:{type:Number, required:true},
    address:{type:mongoose.Schema.Types.ObjectId, ref:"address", required:true},
    products:[{type:mongoose.Schema.Types.ObjectId, ref:"product", required:false}],
    follwers:{type:Number, required:false},
    ratings:{type:Number, required:false},
    reviews:{type:Number, required:false},
});

const Seller = mongoose.model('seller',sellerSchema);
module.exports = Seller;

