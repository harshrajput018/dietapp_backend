const mongoose = require('mongoose');
const express = require('express');
const Admin= require('../models/admins')
const password=require('s-salt-pepper')
const jwt=require('jsonwebtoken')
const router = express.Router()
router.use(express.json())

JWT_SECRET='my name is harsh'

router.post('/',async(req,res)=>{
    console.log(req.body)
    let a=await Admin.findOne({ Adminid: req.body.data.Adminid });
    if (a) {
        let pwd = await password.compare(req.body.data.password,a.password)
        if (pwd) {
            
            let admin=await Admin.findOne({ Adminid: req.body.data.Adminid });

            const data = {
                admin: {
                    id: admin.id
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