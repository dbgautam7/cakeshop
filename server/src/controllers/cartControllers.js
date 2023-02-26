const Carts = require("../models/Carts");

const PostCart = async (req, res) => {
    try {
        const data = await Carts.create(req.body)
        // console.log(data)
        if(data){
            res.status(200).json({
                msg: "Product added to cart successfully"
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
        // console.log(data);
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
        // console.log(data)
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

  const UpdateCart= async (req, res) => {
    console.log(req.body,req.params)
    try {
      const cartId = req.params.id;
      const { userId, quantity } = req.body;
      const updatedCartItem = await Carts.findByIdAndUpdate(cartId, { quantity }, { new: true });
      if (!updatedCartItem) {
        return res.status(404).json({ error: 'Cart item not found' });
      }
      const updatedCart = await Carts.find({ userId }).populate('productId');
      res.json(updatedCart);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }


  exports.PostCart = PostCart;
  exports.GetCart = GetCart;
  exports.GetCartById = GetCartById;
  exports.DeleteCart = DeleteCart;
  exports.UpdateCart = UpdateCart;