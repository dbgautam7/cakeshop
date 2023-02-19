const { Router } = require('express');
const app = Router();
const cartControllers=require("../controllers/cartControllers")

app.post('/cart', cartControllers.PostCart)



module.exports = app;

