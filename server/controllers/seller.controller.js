const Seller = require("../models/seller.model")
const express = require('express');

const router = express.Router();

//get all seller
router.get('/', async(req,res)=>{
    try{
        const sellers = await Seller.find().lean().exec();
        return res.status(200).json(sellers)

    }catch(err){
        res.status(500).json({status:'fail', message:'somthing ent wrong'});
    }
})


//create a new seller
// router.post('/', async(req,res)=>{
//     try{

//         const seller = await Seller.create(req.body);
//         res.status(200).json({seller})
//     }catch(err){
//         res.status(500).json({status:'fail', message:'somthing went wrong'});
//     }
// })

// update seller details

router.patch('/:id', async(req,res)=>{
    try{

        const seller = await Seller.findByIdAndUpdate(req.params.id, req.body, {new:true});
        res.status(201).json({seller})

    }catch(err){
        res.status(500).json({status:'fail', message:'somthing went wrong'});
    }
})

//delete an seller
router.delete('/:id',async(req,res)=>{
    try{

        const seller = await Seller.findByIdAndDelete(req.params.id).lean().exec();

        res.status(200).json({seller})

    }catch(err){
        res.status(500).json({status:'fail', message:'somthing went wrong'});
    }
})

//get a single seller
router.delete('/:id',async(req,res)=>{
    try{

        const seller = await Seller.findById(req.params.id).lean().exec();

        res.status(200).json({seller})

    }catch(err){
        res.status(500).json({status:'fail', message:'somthing ent wrong'});
    }
})


// return router 
module.exports = router;