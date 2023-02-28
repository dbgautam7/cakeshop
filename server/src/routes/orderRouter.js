const { Router } = require('express');
const app = Router();
const orderControllers=require("../controllers/orderControllers")

app.post('/orders', orderControllers.PostOrder)

app.get('/orders', orderControllers.GetOrders)


module.exports = app;