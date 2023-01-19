const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    phoneNumber: { type: Number },
    email: { type: String },
    address: { type: String },
    password: { type: String },
    role:{type:String}
  },
  { collection: "users" }
);
module.exports = mongoose.model("Users", usersSchema);