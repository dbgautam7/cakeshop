const { Router } = require('express');
const app = Router();
const cartControllers=require("../controllers/cartControllers")

app.post('/cart', cartControllers.PostCart)
app.get('/cart',cartControllers.GetCart)
app.get('/cart/:id',cartControllers.GetCartById)
app.delete('/cart',cartControllers.DeleteCart)
app.patch('/cart/:id',cartControllers.UpdateCart)

module.exports = app;

