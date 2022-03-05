const Seller = require('../models/seller.model');
const jwt = require('jsonwebtoken');

const JWT_SECRETE_KEY = process.env.JWT_SECRETE_KEY;

const createToken = (seller) =>{
    return jwt.sign({id:seller.id},JWT_SECRETE_KEY);
}

const signUp = async(req,res)=>{
    try{
         var seller;
         //find seller by email to check, does seller already registered 
         seller = await Seller.find({email:req.body.email}).lean().exec();

         //if seller exist, return  
         if(seller) return res.status(401).json({status:'fail',message:'seller already exist, try to login.'}); 

         //if seller not exist , then create new seller
         seller = await seller.create(req.body);

         const token = createToken(seller);

         return res.status(201).json({token,seller});

     }catch(err){

         return res.status(500).json({status:"fail", message:"somthing went wrong"});
     }
}

const signIn = async(req,res)=>{
    try{
        var seller;

        //cheak seller exist or not
        seller = await Seller.find({email:req.body.email});

        //if seller not exist then return
        if(!seller) return res.status(401).json({status:'fail', message:'you are not a supplier'});

        //if exist match password;
       const matchedPassword = await seller.verifyPassword(req.body.password);

       //if password not match return 
       if(!matchedPassword) return res.status(401).json({status:"fail", message:"wrong password"})

       //if password matched, create token
       const token = createToken(seller);

       return res.status(200).json({token,seller})

    }catch(err){  
        return res.status(500).json({status:"fail", message:"somthing went wrong"});
    }
}

module.exports = {signIn,signUp};