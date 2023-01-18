const mongoose = require('mongoose');
const express = require('express');
const User= require('../models/users')
const password=require('s-salt-pepper')



const router = express.Router()
router.use(express.json())

router.post('/',async(req,res)=>{

    console.log(req.body);

    if (req.body.data.password == req.body.data.confirmpassword && req.body.data.first && req.body.data.last && req.body.data.userid && req.body.data.password && req.body.data.confirmpassword) {
        if (await User.findOne({ userid: req.body.data.userid })) {
            console.log('aaa');
            res.status(400).json({success:false, error: 'A user with same userid already exist' });
        }



        else {
            
            let passwordhash = await password.hash(req.body.data.password)

            const user = new User({ first: req.body.data.first, last: req.body.data.last, userid: req.body.data.userid, password: passwordhash })

            await user.save();

            res.send({ success:true,msg:'You have signed up successfully' })
        }
    }
})

module.exports=router