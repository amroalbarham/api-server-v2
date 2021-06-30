'use strict';

const mongoose = require('mongoose');

const foodSchem=mongoose.Schema({
  name:String,
  price:String
})

const foodModel=mongoose.model('food',foodSchem);

module.exports =foodModel;

