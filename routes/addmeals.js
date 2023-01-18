const mongoose = require('mongoose');
const express = require('express');
const Meal= require('../models/meals')
const password=require('s-salt-pepper')



const router = express.Router()
router.use(express.json())

router.post('/',async(req,res)=>{

    console.log(req.body.data);


    
    let date=req.body.mealdate;

    console.log(date);

        
            const meal = new Meal({allmeals:req.body.data,userid:req.body.userid, mealdate:date })

    await meal.save();
        

    
    

    

            

    res.send({success:'true'})
})

module.exports=router