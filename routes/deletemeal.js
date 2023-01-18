const express = require('express')
const router = express.Router()
const User= require('../models/users')
const Meal= require('../models/meals')
const mongoose=require('mongoose')
const jwt=require('jsonwebtoken')

router.use(express.json())

router.post('/',async(req,res)=>{

    console.log(req.body)

    await Meal.deleteOne({_id:req.body.id});

    res.send({success:true});

    
})

module.exports=router