const Product = require("../models/product.model")
const express = require('express');

const router = express.Router();
//search product
router.get('/search',async(req,res)=>{
    try{
        const searchfield = req.query.name;

        let data = await Product.find({productName:{$regex:searchfield, $options:"$i"}})
        
        res.send(data);

    }catch(err){
        console.error(err);
        res.status(500).json({status:'fail', message:'somthing went wrong'});
    }
})

//get all product
router.get('/', async(req,res)=>{
    try{
        const products = await Product.find().lean().exec();
        return res.status(200).json({products})

    }catch(err){
       
        res.status(500).json({status:'fail', message:'somthing went wrong'});
    }
})


//create a new product
router.post('/', async(req,res)=>{
    try{
        
        const product = await Product.create(req.body);
        
        res.status(200).json({product})
    }catch(err){
        console.log(err)
        res.status(500).json({status:'fail', message:'somthing went wrong'});
    }
})

// update product details

router.patch('/:id', async(req,res)=>{
    try{

        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true});
        res.status(201).json({product})

    }catch(err){
        res.status(500).json({status:'fail', message:'somthing went wrong'});
    }
})

//delete an product
router.delete('/:id',async(req,res)=>{
    try{

        const product = await Product.findByIdAndDelete(req.params.id).lean().exec();

        res.status(200).json({product})

    }catch(err){
        res.status(500).json({status:'fail', message:'somthing went wrong'});
    }
})

//get a single product
router.get('/:id',async(req,res)=>{
    try{

        const product = await Product.findById(req.params.id).lean().exec();

        res.status(200).json({product})

    }catch(err){
        res.status(500).json({status:'fail', message:'somthing ent wrong'});
    }
})


// return router 
module.exports = router;