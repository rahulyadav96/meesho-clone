const User = require('../models/user.model');
const express = require('express');

const router = express.Router();

//get all users
router.get('/', async(req,res)=>{
    try{
        const users = await User.find().lean().exec();
        return res.status(200).json(users)

    }catch(err){
        res.status(500).json({status:'fail', message:'somthing went wrong'});
    }
})


//create a new user
router.post('/', async(req,res)=>{
    try{

        const user = await User.create(req.body);
        res.status(200).json({user})
    }catch(err){
        res.status(500).json({status:'fail', message:'somthing went wrong'});
    }
})

// update user details

router.patch('/:id', async(req,res)=>{
    try{

        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new:true});
        res.status(201).json({user})

    }catch(err){
        res.status(500).json({status:'fail', message:'somthing went wrong'});
    }
})

//delete an user
router.delete('/:id',async(req,res)=>{
    try{

        const user = await User.findByIdAndDelete(req.params.id).lean().exec();

        res.status(200).json({user})

    }catch(err){
        res.status(500).json({status:'fail', message:'somthing went wrong'});
    }
})

//get a single user
router.delete('/:id',async(req,res)=>{
    try{

        const user = await User.findById(req.params.id).lean().exec();

        res.status(200).json({user})

    }catch(err){
        res.status(500).json({status:'fail', message:'somthing went wrong'});
    }
})


// return router 
module.exports = router;