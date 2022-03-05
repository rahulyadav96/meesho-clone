const Address = require("../models/address.model")
const express = require('express');

const router = express.Router();

//get all address
router.get('/', async(req,res)=>{
    try{
        const addresss = await Address.find().lean().exec();
        return res.status(200).json(addresss)

    }catch(err){
        res.status(500).json({status:'fail', message:'somthing went wrong'});
    }
})


//create a new address
router.post('/', async(req,res)=>{
    try{

        const address = await Address.create(req.body);
        res.status(200).json({address})
    }catch(err){
        res.status(500).json({status:'fail', message:'somthing went wrong'});
    }
})

// update address details

router.patch('/:id', async(req,res)=>{
    try{

        const address = await Address.findByIdAndUpdate(req.params.id, req.body, {new:true});
        res.status(201).json({address})

    }catch(err){
        res.status(500).json({status:'fail', message:'somthing went wrong'});
    }
})

//delete an address
router.delete('/:id',async(req,res)=>{
    try{

        const address = await Address.findByIdAndDelete(req.params.id).lean().exec();

        res.status(200).json({address})

    }catch(err){
        res.status(500).json({status:'fail', message:'somthing went wrong'});
    }
})

//get a single address
router.delete('/:id',async(req,res)=>{
    try{

        const address = await Address.findById(req.params.id).lean().exec();

        res.status(200).json({address})

    }catch(err){
        res.status(500).json({status:'fail', message:'somthing ent wrong'});
    }
})


// return router 
module.exports = router;