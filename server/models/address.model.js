const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    address:{type:String, required:true},
    city:{type:String, required:true},
    landmark:{type:String, required:true},
    state:{type:String, required:true},
    pincode:{type:Number, required:true},
    country:{type:String, required:true, default:"india"}
})

const Address = mongoose.model('address', addressSchema);
module.exports = Address;