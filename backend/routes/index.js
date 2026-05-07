var express = require('express');
var router = express.Router();
var Product=require('../models/product');

router.get("/products",(req,res)=>{
  Product.find({})
  .then((docs)=>res.json(docs))
  .catch((err)=>console.log(err))
})

router.post("/add",(req,res)=>{
  Product.create(req.body)
  .then(()=>res.json({"status":"product added successfully"}))
  .catch((err)=>console.log(err))
})

router.delete("/delete/:pid",(req,res)=>{
  Product.deleteOne({_id:req.params.pid})
  .then(()=>res.json({"status":"product deleted successfully"}))
  .catch((err)=>console.log(err))
})

router.post("/addmany",(req,res)=>{
  Product.insertMany(req.body)
  .then(()=>res.json({"status":"products added successfully"}))
  .catch((err)=>console.log(err))
})

router.patch("/updatePrice/:pid",(req,res)=>{

  Product.findOneAndUpdate({_id:req.params.pid},{...req.body})
   .then(()=>res.json({"status":"price updated successfully"}))
  .catch((err)=>console.log(err))

})

router.get("/minproducts",(req,res)=>{
  var minPrice=req.query.min;
  Product.find({productPrice:{$lt:minPrice}})
  .then((docs)=>res.json(docs))
  .catch((err)=>console.log(err))
})
 

router.get("/pagination",(req,res)=>{
  var {limitNum,page}=req.query;
 const skipNum=(page-1)*limitNum;
 Product.find({}).skip(skipNum).limit(limitNum)
.then((docs)=>res.json(docs))
  .catch((err)=>console.log(err))

})


router.get("/filter",(req,res)=>{
  var {orderby,order}=req.query;
  var sortObj={[orderby]:order=="asc" ? 1:-1};
  Product.find().sort(sortObj)
  .then((docs)=>res.json(docs))
  .catch((err)=>console.log(err))



})








module.exports = router;
