const mongoose = require('mongoose');
const express = require('express');
const Admin= require('../models/admins')
const password=require('s-salt-pepper')



const router = express.Router()
router.use(express.json())

router.post('/',async(req,res)=>{

    console.log(req.body);

    if (req.body.data.password == req.body.data.confirmpassword && req.body.data.first && req.body.data.last && req.body.data.Adminid && req.body.data.password && req.body.data.confirmpassword) {
        if (await Admin.findOne({ Adminid: req.body.data.Adminid })) {
            console.log('aaa');
            res.status(400).json({success:false, error: 'A Admin with same Adminid already exist' });
        }



        else {
            
            let passwordhash = await password.hash(req.body.data.password)

            const admin = new Admin({ first: req.body.data.first, last: req.body.data.last, Adminid: req.body.data.Adminid, password: passwordhash })

            await admin.save();

            res.send({ success:true,msg:'You have signed up successfully' })
        }
    }
})

module.exports=router