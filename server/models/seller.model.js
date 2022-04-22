const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
    // email:{type:Number, required:false , unique:true},
    // password:{type:String, required:true},
    shopName:{type:Number, required:true},  
    // address:{type:mongoose.Schema.Types.ObjectId, ref:"address", required:true},
    // products:[{type:mongoose.Schema.Types.ObjectId, ref:"product", required:false}],
    follwers:{type:Number, required:false},
    ratings:{type:Number, required:false},
    reviews:{type:Number, required:false},
});

// hash password before saving data

sellerSchema.pre('save',function(next){

    //check is password is modified or not
    //if password not modified return next
    if(!this.isModfied('password')) return next();

    //in modified case , hash it
    bcrypt.hash(this.password,8,(err,hashed)=>{

        if(err) return next(err);

        this.password = hashed;

        next()
    })
})

// method for verify password while login

sellerSchema.methods.verifyPassword = function(password){

    const hashedPassword = this.password;

    return new Promise((resolve,reject)=>{
        bcrypt.compare(password,hashedPassword,(err,matched)=>{

            if(err) reject(err);

            resolve(matched);
        })
    })

}


const Seller = mongoose.model('seller',sellerSchema);
module.exports = Seller;

