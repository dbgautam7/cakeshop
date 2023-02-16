const express = require("express");
const router = express.Router();
const Products=require("../models/Products")
const multer  = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../client/src/uploads/products')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage }).single('productImage')

router.post("/products", upload, async (req, res) => {
    try {
      // console.log(req)
      const product=await Products.findOne({name: req.body.name})
        if(!product){
          // const productData =await Products.create(req.body);
          
          const productData =new Products({
            name: req.body.name,
            price: req.body.price,
            productImage: req.body.productImage
          });
          console.log(productData)
          productData.save()

          // console.log(productData)
          if (productData) {
            
            res.json({ msg: "Product is added" });
          } else {
            res.json({ msg: "something went worng" });
          } 
        }
        else{
          res.status(409).json({ msg: "Product already exists" });
        }
   
    } catch (err) {
      console.log(err);
    }
  });

  router.get("/products", async (req, res) => {
    try {
        const data = await Products.find()
        // console.log(data)
        if(data){
            res.status(200).json({
              productList:data,
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

    router.delete("/products", async (req, res) => {
      // console.log(req.body._id)
      try {
        const data = await Products.findByIdAndDelete(req.body._id)
        if(data){
          res.status(200).json({msg: 'deleted successfully'})
        }
        else{
          res.status(500).json({msg:"something went wrong"})
        }
      } catch (err) {
          console.log(err);
      }
      });

      router.put("/products", async (req, res) => {
        // console.log(req.body._id)
        try {
          const data = await Products.findByIdAndUpdate(req.body._id)
          if(data){
            res.status(200).json({msg: 'updated successfully'})
          }
          else{
            res.status(500).json({msg:"something went wrong"})
          }
        } catch (err) {
            console.log(err);
        }
        });
  

  module.exports = router;