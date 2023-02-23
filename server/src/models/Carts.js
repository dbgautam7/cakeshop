const mongoose = require("mongoose");
const cartsSchema = new mongoose.Schema(
  {
    quantity:{type:Number},
    pricePerUnit: { type: Number },
    totalPrice: { type: Number },
  },
  { collection: "carts" }
);
module.exports = mongoose.model("Carts", cartsSchema);