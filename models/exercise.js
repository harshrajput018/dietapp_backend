const mongoose = require('mongoose');

const Exercises = new mongoose.Schema({

    userid:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    allexercises: Object,
    exdate: String
  });

const Exercise=mongoose.model('Exercise',Exercises)

module.exports=Exercise;