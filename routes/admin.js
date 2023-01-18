const express = require('express')
const mongoose = require('mongoose')
const Exercise = require('../models/exercise')
const router = express.Router()
const Meal= require('../models/meals')
const User= require('../models/users')

router.use(express.json());

router.get('/',async(req,res)=>{

    const allUsers=await User.find({})



    res.send({allUsers});
})


router.get('/getex',async(req,res)=>{

    console.log(req.header('id'))

    const exercises=await Exercise.find({userid:(req.header('id')),exdate:req.header('exdate')})

    console.log(exercises)

    res.send(exercises);

})

router.get('/getmeals',async(req,res)=>{

    console.log(req.header('id'))

    const meals=await Meal.find({userid:(req.header('id')),mealdate:req.header('mealdate')})

    console.log(meals)

    res.send(meals);

})

module.exports = router





