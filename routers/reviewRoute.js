const express = require('express');
const app = express();

const reviewController = require('../controllers/reviewController.js');

app.get("/getReview", reviewController.getReview)
app.post("/addReview", reviewController.AddReview);


module.exports = app;