const Orders= require("../models/Orders")

const PostOrder = async (req, res) => {
    try {
      const orderData = req.body;
      console.log(orderData)
      const newOrder = new Orders(orderData);
      const savedOrder = await newOrder.save();
      res.status(200).json(savedOrder);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to order" });
    }
  };

  const GetOrders = (req, res) => {
    Orders.find()
    .populate({
        path: 'cartId',
        populate: {
          path: 'userId',
          select: 'email'
        }
      })
    .populate({
      path: 'cartId',
      populate: {
        path: 'productId',
        select: 'name'
      }
    })
    .exec((err, orders) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: err });
      } else {
        // console.log(orders[0].cartId.userId.email,"orders")
        res.json(orders);
      }
    });
}


  exports.PostOrder=PostOrder
  exports.GetOrders=GetOrders