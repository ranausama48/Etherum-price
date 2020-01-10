var mongoose = require('mongoose');

// User Schema
var Trade = mongoose.model('Trade', {
  eth_price: {
    type: String,
    required: true,

  },
  c_balance: {
    type: String,
    required: true
  },
  checkAmount: {
    type: Number,
    required: true
  },
  eth_quantity:{
    type:Number,
    required: true
  },
  Trad_date:{
    type:String,
    required:true
  },
  userID:{
    type:String,
    required:true
  },
  // balance: {
  //   type: Number,
  //   required: true
  // },
});
module.exports = Trade;
