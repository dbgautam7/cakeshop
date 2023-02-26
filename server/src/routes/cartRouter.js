const { Router } = require('express');
const app = Router();
const cartControllers=require("../controllers/cartControllers")

app.post('/products/carts', cartControllers.PostCart)
app.get('/products/carts',cartControllers.GetCart)
app.get('products/carts/:id',cartControllers.GetCartById)
app.delete('products/carts',cartControllers.DeleteCart)
app.patch('products/carts/:id',cartControllers.UpdateCart)

module.exports = app;

