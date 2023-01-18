const express = require('express')
const router = express.Router()
const Exercise= require('../models/exercise')
const mongoose=require('mongoose')
const jwt=require('jsonwebtoken')

router.use(express.json());


router.post('/',async(req,res)=>{

    console.log(req.body);

    console.log(req.header('auth-token'))

    if(req.header('auth-token')=='null')

    {
        console.log('dada')
        res.send({success:false})
    return ;
}

    

    const data=jwt.verify(req.header('auth-token'),JWT_SECRET)

    

    const exercises=await Exercise.find({userid:mongoose.Types.ObjectId(data.user.id),exdate:req.body.mealdate})

    console.log(exercises)

    res.send({exercises});
})

module.exports=router