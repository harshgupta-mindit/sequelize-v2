const express = require('express');
const app = express();

const productController = require('../controllers/productController.js');

app.get("/getProduct", productController.getProduct);
app.post("/addProduct", productController.AddProduct);
app.get("/getProductWithReviews", productController.getProductWithReviews);
app.post("/addProductInBulk", productController.addProductInBulk);


module.exports = app;