const mongoose = require("mongoose");
const db = "mongodb+srv://gautamdb7:gautamdb7@cluster0.oke4bhs.mongodb.net/";
module.exports = connect = async () => {
  try {
    //database = cakeshop
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected to mongodb atlas");
  } catch (error) {
    console.error(error);
  }
};
