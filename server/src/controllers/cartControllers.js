const express = require("express");
const { findByIdAndDelete, findByIdAndUpdate } = require("../models/Carts");
const router = express.Router();
const Carts = require("../models/Carts");

const PostCart = async (req, res) => {
    try {
        const data = await Carts.create(req.body)
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

  const GetCart = async (req, res) => {
    try {
       const data=await Carts.find()
       if(data){
        console.log(data)
        res.status(200).json({
            msg:"Orders fetched successfully"
        })
       }
    } catch (err) {
      console.log(err);
    }
  };

  const GetCartById = async (req, res) => {
    try {
      const data = await Carts.findOne({ _id: req.params.id });
      if (data) {
        console.log(data);
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "Cart not found" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    }
  };

  const DeleteCart=async(req,res)=>{
    try{
        const data=await Carts.findByIdAndDelete({_id:req.query.id})
        console.log(data)
        if(data){
            res.status(200).json({
                msg:"Cart deleted successfully"
            })
        }
    }
    catch(error){
        console.log(error)
    }
  }

  const UpdateCart = async (req, res) => {
    try {
      const data = await Carts.findByIdAndUpdate(
       { _id: req.params.id },
        { $set: req.body },
        { new: true }
      );
      console.log(data);
      if (data) {
        res.status(200).json({
          msg: "Cart updated successfully",
        });
      } else {
        res.status(404).json({
          msg: "Cart not found",
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        msg: "Server error",
      });
    }
  };

  exports.PostCart = PostCart;
  exports.GetCart = GetCart;
  exports.GetCartById = GetCartById;
  exports.DeleteCart = DeleteCart;
  exports.UpdateCart = UpdateCart;