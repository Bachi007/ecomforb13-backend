var express = require('express');
var User = require('../models/user')
var bcrypt=require('bcrypt');
var jwt=require('jsonwebtoken');
var router = express.Router();
var nodemailer=require('nodemailer');

router.post("/registration", (req, res) => {
  User.findOne({ username: req.body.username })
    .then(async (data) => {
      if (data) {
        res.json({ "status": "user already existied" })
      }
      else {
        User.create({
          username: req.body.username,
          email: req.body.email,
          phone: req.body.phone,
          role: req.body.role,
          password: await bcrypt.hash(req.body.password, 10)
        })
          .then(() => {res.json({ "status": "registration successful" })
            var transporter=nodemailer.createTransport({
              service:'gmail',
              auth:{
                user:"chitturi.bhaskarasai@gmail.com",
                pass:"oibo tuwg muca xmmd"
              }
            })
            var mailOptions={
              to:req.body.email,
              from:"chitturi.bhaskarasai@gmail.com",
              subject:"Thanks for Registring with invokEit",
              text:`Hey ${req.body.username} your registration with invokEit is successful and your password is : ${req.body.password}`
            }
            transporter.sendMail(mailOptions,(err)=>{
              if(err)
                console.log(err)
              console.log("Email sent.")
            })


        })
          .catch((err) => console.log(err))
      }
    })

})

router.post("/login",(req,res)=>{
  User.findOne({username:req.body.username})
  .then(async (dbuser)=>{
    if(dbuser){
      if(await bcrypt.compare(req.body.password,dbuser.password)){
        const token=jwt.sign({userId:dbuser._id},process.env.secretKey,{expiresIn:'2h'})
        res.json({"status":"login successful","token":token,"userId":dbuser._id,"role":dbuser.role})
      }
      else{
        res.json({"status":"invalid username or password"})
      }
    }
    else{
      res.json({"status":"user not existed"})
    }
  })
})

















module.exports = router;
