const mongoose = require('mongoose');
const url='mongodb://localhost:27017/cakeshop'
module.exports = connect=async()=>{
    try{
      //database = cakeshop
        await mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});
        console.log("connected to mongodb");
    }catch(error){
        console.error(error);
    }
  }
   