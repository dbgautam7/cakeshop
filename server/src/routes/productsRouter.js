const express = require("express");
const router = express.Router();
const Products=require("../models/Products")
const multer  = require('multer')

router.post("/products", async (req, res) => {
    try {
      const product=await Products.findOne({ name: req.body.name })
        if(!product){
          const productData =await Products.create(req.body);
          console.log(productData)
          if (productData) {
            res.json({ msg: "Product is added" });
          } else {
            res.json({ msg: "something went worng" });
          } 
        }
        else{
          res.status(409).json({ error: "Product already exists" });
        }
   
    } catch (err) {
      console.log(err);
    }
  });

  router.get("/products", async (req, res) => {
    try {
        const data = await Products.find()
        if(data){
            res.status(200).json({
                msg:"Fetch Success"
            })
        }else{
            res.status(500).json({
                msg: "something went wrong"
            })
        }
    } catch (err) {
        console.log(err);
    }
    });

  module.exports = router;