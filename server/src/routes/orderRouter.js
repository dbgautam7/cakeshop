const { Router } = require('express');
const app = Router();
const orderControllers=require("../controllers/orderControllers")

app.post('/orders', orderControllers.PostOrder)

app.get('/orders', orderControllers.GetOrders)

// app.put('/orders', orderControllers.PutOrder)

module.exports = app;