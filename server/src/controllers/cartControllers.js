const Carts = require("../models/Carts");

const PostCart = async (req, res) => {
  try {
    const cartData = req.body;
    console.log(cartData)
    const newCart = new Carts(cartData);
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to save cart item" });
  }
};

  const GetCart = (req, res) => {
    Carts.find()
      .populate('userId', 'email') 
      .populate('productId', 'name price') 
      .exec((err, carts) => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: err });
        } else {
          // console.log(carts,"carts")
          res.json(carts);
        }
      });
  }

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
       { userId: req.params.userId },
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