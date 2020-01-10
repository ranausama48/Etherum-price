var mongoose = require('mongoose');

//Trade schema
var Trade = mongoose.model('trades', {
    eth_price: {
        type: String,
        required: true
    },
    c_balance: {
        type: String,
        required: true
    },
    checkAmount: {
        type: Number,
        required: true
    },
    // date: {
    //     type: Date,
    //     required: true
    // },
    // username: {
    //     type: String,
    //     required: true,

    // },
})
module.exports = Trade;
