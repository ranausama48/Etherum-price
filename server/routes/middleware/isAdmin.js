//const jwt = require('jsonwebtoken');
const User = require("../../models/user");
function isAdmin(req, res, next) {
   console.log("Midlware Run")
   console.log(req.body)
   const { price, quantity, capital, role } = req.body;
    User.findOne({role}).then(authuser => {
         console.log("authuser", role)
         //console.log("admin", authuser)
         if (role=='admin') 
         {
            console.log("You Are Admin")
            next()
         } 
         else 
         {
            console.log('Not Admin')
            
            return res.send({capital:"You are Not Admin"})
         }
        
        
    })

}

module.exports = isAdmin;