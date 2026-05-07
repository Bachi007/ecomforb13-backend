var mongoose=require('mongoose');
var productSchema=new mongoose.Schema({
    productName:String,
    productDescription:String,
    productPrice:Number,
    productImage:String
})
Product=mongoose.model('product',productSchema);
module.exports=Product;