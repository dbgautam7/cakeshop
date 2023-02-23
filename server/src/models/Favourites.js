const mongoose = require("mongoose");
const favouritesSchema = new mongoose.Schema(
  {
    productId:{type:String},
    userId:{type:String},
    color:{type:String}
  },
  { collection: "favourites" }
);
module.exports = mongoose.model("Favourites", favouritesSchema);