var mongoose = require('mongoose');

// User Schema
var Capital = mongoose.model('Capital', {
  price: {
    type: String,
    required: true,

  },
  quantity: {
    type: String,
    required: true
  },
  capital:{
      type:String,
      required:true
  }

});
module.exports = Capital;
