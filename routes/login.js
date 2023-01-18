const mongoose = require('mongoose');
const express = require('express');
const User= require('../models/users')
const password=require('s-salt-pepper')
const jwt=require('jsonwebtoken')
const router = express.Router()
router.use(express.json())

JWT_SECRET='my name is harsh'

router.post('/',async(req,res)=>{
    console.log(req.body)
    let a=await User.findOne({ userid: req.body.data.userid });
    if (a) {
        let pwd = await password.compare(req.body.data.password,a.password)
        if (pwd) {
            
            let user=await User.findOne({ userid: req.body.data.userid });

            const data = {
                user: {
                    id: user.id
                }
            }
            const authtoken = jwt.sign(data, JWT_SECRET);

            res.send({ success:true,authtoken })

            
        }

        else{
            res.status(400).json({success:false,error:'please provide correct credentials'})
        }
    }

    else {
        console.log('pls provide correct credentials')
        res.status(400).json({success:false,error:'please provide correct credentials'})
    }



    

})

module.exports=router