const express = require("express");
const router = express.Router();
const Carts = require("../models/Carts");

const PostCart = async (req, res) => {
    try {
        const data = await Carts.create(req.body)
        console.log(data)
        if(data){
            res.status(200).json({
                msg: "orders dispatched successfully"
            })
        }
        else{
            res.status(404).json({
                msg:"Something went wrong"
            })
        }
    } catch (err) {
      console.log(err);
    }
  };


  exports.PostCart = PostCart;