const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/ethTrade", function (err, data) {
    console.log(err || data)
})