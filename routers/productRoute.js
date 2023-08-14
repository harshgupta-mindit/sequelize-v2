const express = require('express');
const app = express();

const productController = require('../controllers/productController.js');

app.get("/getProduct", productController.getProduct)
app.post("/addProduct", productController.AddProduct);


module.exports = app;