var express = require("express");
require("./config/db");
// require("./config/localDb");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var mongoose = require("mongoose");
var passport = require("passport");
var Trade = require("./models/tradeSchema");
var LocalStrategy = require("passport-local").Strategy;
const cors = require('cors')
const path = require('path')
const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");

//newedit
const tradeing = require("./routes/traderoute")
//_______________
const stock_I = require("./routes/stockIssue")
var app = express();

var port = process.env.PORT || 9000;


app.use(express.json());
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(userRoutes);
app.use(blogRoutes);
// change
app.use(tradeing)
app.use(stock_I)
app.use((err, req, res, next) => {
    {
        if (err) {
            res.redirect('/token_err')
        }
    }
})
app.use('*', (req, res) => {

    res.sendfile('./build/index.html',);

});
app.listen(port, () => console.log(`App listening on port ${port}`));


