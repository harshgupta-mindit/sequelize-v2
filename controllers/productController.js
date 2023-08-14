const db = require('../models/index');
const Product = db.products;

const AddProduct = async (req, res) => {
    const data = {
        title: req.body.title,
        product_id: req.body.product_id,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published
    }
    await Product.create(data).then(()=> {
        console.log("Data Added success !!!");
        res.status(200).json(data);
    }).catch((err)=> {
        console.log(err);
    })
}



const getProduct = async (req, res) => {
    await Product.findAll()
    .then((data)=> {
        console.log("Product list fetched success !!!");
        res.status(200).json(data);
    })
    .catch((err)=> {
        console.log(err);
    })
}



module.exports = {
    AddProduct,
    getProduct
}