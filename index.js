const express = require("express");
const cors = require('cors');

const ProductRoutes = require('./routers/productRoute');
const ReviewRoutes = require('./routers/reviewRoute');

const app = express();

// DYNAMIC PORT
const PORT = process.env.PORT || 3000;

// HANDLING CORS
const corOrigin = {
    origin: 'http://localhost:3001'
}
app.use(cors(corOrigin));


// HANDLING JSON FORMAT
app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.get("/", (req, res)=> {

    try{
        res.status(200).send("Response from API...");
    }catch(err){
        res.status(400).send("The data you looking for is beyond our reach...");
    }
})


// PRODUCT ROUTE
app.use("/api/product", ProductRoutes);
app.use("/api/review", ReviewRoutes);


app.listen(PORT, ()=> {
    console.log("Runnnig Server...");
})