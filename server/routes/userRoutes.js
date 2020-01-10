const router = require("express").Router();
const User = require("../models/user");
// const Trade = require("../models/trademodels");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require('./middleware/auth');
const nodemailer = require("nodemailer");


// async..await is not allowed in global scope, must use a wrapper
async function main(email) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: 'mrkhuram00@gmail.com',
      pass: 'Khuram123@'
    }
    // host: 'smtp.ethereal.email',
    // port: 587,
    // secure: false, // true for 465, false for other ports
    // auth: {
    //     user: testAccount.user, // generated ethereal user
    //     pass: testAccount.pass // generated ethereal password
    // }
  });
  let token = jwt.sign(
    { email },
    'forgettingPassword',
    { expiresIn: 3600 },
  )
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'noreply@panacloud.com', // sender address
    to: email, // list of receivers
    subject: 'RESET PASSWORD', // Subject line
    text: 'Your password reset code is ', // plain text body
    html: `Your password reset code is given below, use the code within 1 hour. It will automatically expires after 1 hour.
      <br><a href="${window.location.hostname}/verifying_token/${token}">${window.location.hostname}/verifying_token/${token}</a>` // html body
  });

  return info
}




router.post("/register", (req, res) => {
  const { username, email, password } = req.body;

  //simple Validation
  if (!username || !email || !password) {
    return res.status(400).json({ msg: "please enter all fields" });
  }

  //Check for existence
  User.findOne({ email }).then(user => {

    if (user) {
      return res.status(400).json({ msg: "user already exist " });
    }
    const newUser = new User({
      username,
      email,
      password
    });

    //Create Salt & Hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;

        newUser.password = hash;
        newUser.save().then(user => {
          jwt.sign(
            { id: user.id },
            "secret_key",
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user
              });
            }
          );
        });
      });
    });
  });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  //simple Validation
  if (!email || !password) {
    return res.status(400).json({ msg: "please enter all fields" });
  }

  //Check for existence
  User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(400).json({ msg: "user does not exist " });
    }

    // Validate password
    bcrypt.compare(password, user.password)
      .then(isMatch => {
        if (!isMatch) return res.status(400).json({ msg: "Invalid Credentials" })

        jwt.sign(
          { id: user.id },
          "secret_key",
          { expiresIn: 3600 },
          (err, token) => {
            if (err) throw err;
            res.json({
              token,
              user
            });
          }
        );
      })
  });
});



router.post("/update", (req, res) => {
  const { username, email, password, oldpassword } = req.body;

  //simple Validation
  if (!email || !password) {
    return res.status(400).json({ msg: "please enter all fields" });
  }



  //Check for existence
  User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(400).json({ msg: "user does not exist " });
    }

    // Validate password
    bcrypt.compare(oldpassword, user.password)
      .then(isMatch => {
        if (!isMatch) return res.status(400).json({ msg: "Invalid Credentials" })

        const updatedUser = {
          username,
          email,
          password,
          oldpassword
        };

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(updatedUser.password, salt, (err, hash) => {
            if (err) throw err;
            // console.log(hash)
            updatedUser.password = hash
            // console.log(updatedUser);
            // console.log(user.password);
            User.findOneAndUpdate({ email }, {
              $set: {
                username: user.username,
                password: updatedUser.password
              }
            }, (err, doc) => {
              if (err) {
                console.log("Something wrong when updating data!");
              } else {
                console.log('update successfuly');

              }
            });
          })

          jwt.sign(
            { id: user.id },
            "secret_key",
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user
              });
            }
          );
        })
      })
  });
});

router.get('/user', auth, (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then(user => res.json(user))
})

router.get('/get_user', (req, res) => {
  User.find({}, function (err, userlist) {
    res.json({
      userlist
    })
  })
})

router.post('/forgotpassword', (req, res) => {
  let email = req.body.email

  // User.findOne({ email }).then(user => {
  //   if (!user) {
  //     return res.status(400).json({ msg: "user does not exist " });
  //   }
  main(email).then((resp) => {
    if (resp) {
      console.log(resp);

    }
  })


})

// })
let token 
router.get('/verifying_token/:token', (req, res) => {
  token = req.params.token
  //  let token = req.body.token
  let decoded = jwt.verify(token, 'forgettingPassword')
  console.log(decoded);
  if (decoded) {
    res.redirect(`/set_new_password`)
  }

})

router.post('/change_password',(req,res)=>{
console.log('working');
let decoded = jwt.verify(token, 'forgettingPassword')
let email = decoded.email
let newPassword = req.body.password
    

  // hashing password 
  bcrypt.genSalt(10, (err,salt)=>{
    bcrypt.hash(newPassword, salt, (err,hash)=>{
        if(err) throw err;
        newPassword =  hash
        User.findOneAndUpdate({email},{
          $set: {
            password: newPassword
          }
        },(err,doc)=>{
          if(err){
            console.log("there is an err" , err);
            
          }else{
            console.log("successfuly updatae" ,  doc);
            
          }

        })
    })
  })


})
router.post("/logout", (req, res) => { });

module.exports = router;
