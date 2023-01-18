const express= require('express')
const Exercise= require('../models/exercise')
const router= express.Router()

router.use(express.json())

router.post('/',async(req,res)=>{
    console.log(req.body);

    let date=req.body.mealdate;

    const exercise = new Exercise({allexercises:req.body.data,userid:req.body.userid,exdate:date})
    await exercise.save()

    res.send({success:'true'})
})

module.exports=router