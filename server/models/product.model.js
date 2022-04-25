const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    thumbnail:{type:String, required:true},
    productName:{type:String, required:true},
    price:{type:Number, required:true},
    // seller:{type:mongoose.Schema.Types.ObjectId, ref:"seller", required:true},
    oldPrice:{type:String, required:false},
    offer:{type:Number, required:false},
    rating:{type:Number, required:false},
    // reviews:[{type:Number, required:false}],
    sizes:[{type:String, required:true}],
    // otherImages:[{type:Number, required:false}],
},{
    versionKey:false,
    timestamps:true
});

const Product = mongoose.model('product',productSchema);
module.exports = Product;