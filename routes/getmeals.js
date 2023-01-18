const express = require('express')
const router = express.Router()
const User= require('../models/users')
const Meal= require('../models/meals')
const mongoose=require('mongoose')
const jwt=require('jsonwebtoken')
router.use(express.json())

router.post('/',async(req,res)=>{
    console.log(req.body)
    console.log(req.header('auth-token'))

    if(req.header('auth-token')=='null')

    {
        console.log('dada')
        res.send({success:false})
    return ;
}

    

    const data=jwt.verify(req.header('auth-token'),JWT_SECRET)

    

    const meals=await Meal.find({userid:mongoose.Types.ObjectId(data.user.id),mealdate:req.body.mealdate})

    const user=await User.findOne({_id:mongoose.Types.ObjectId(data.user.id)});

    console.log(user.first,user.last,meals)

    res.send({meals,user});
})

module.exports=router