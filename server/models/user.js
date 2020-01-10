var mongoose = require('mongoose');

// User Schema
var User = mongoose.model('users', {
  username: {
    type: String,
    required: true,

  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  // balance: {
  //   type: Number,
  //   required: true
  // },
});
module.exports = User;

