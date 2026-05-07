var mongoose=require('mongoose');

var userSchema=new mongoose.Schema({
    username:String,
    password:String,
    email:String,
    phone:String,
    role:String
},{strict:true})

var User=mongoose.model('user',userSchema);
module.exports=User;