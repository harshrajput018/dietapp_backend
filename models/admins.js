const mongoose = require('mongoose');

const Admins = new mongoose.Schema({
    first: String,
    last: String,
    userid: String,
    password: Object
  });

const Admin=mongoose.model('Admin',Admins)

module.exports=Admin;