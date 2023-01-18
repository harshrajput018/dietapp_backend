const mongoose = require('mongoose');

const Meals = new mongoose.Schema({

    userid:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    allmeals: Object,
    mealdate: String    
  });

const Meal=mongoose.model('Meal',Meals)

module.exports=Meal;