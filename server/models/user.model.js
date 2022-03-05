const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    mob:{type:String, required:true},
    firstName: {type:String, required:false},
    lastName: {type:String, required:false},
    email:{type:String, required:false, unique:true},
    gender:{type:String, required:false},
    dob:{type:String, required:false},
    addresses:[{type:String, required:false}]
},{
    versionKey:false,
    timestamps:true
});

const User = mongoose.model('users',userSchema);
module.exports = User;

