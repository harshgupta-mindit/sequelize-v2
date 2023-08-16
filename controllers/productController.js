const db = require('../models/index');
const Product = db.products;
const Review = db.reviews;

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


const addProductInBulk = async (req, res) => {
    await Product.bulkCreate().then((data)=> {
        res.status(200).json(data);
        console.log("Bulk product added success !!!");
    })
    .catch((err)=> {
        console.log("Bro an error occured : ", err)
    })
}


const getProductWithReviews = async (req, res) => {
    const data = await Product.findAll({
        includes: [{
            model: Review,
            as: 'review'
        }],
        where: {
            product_id: 12
        }
    })

    res.status(200).json(data);
}



module.exports = {
    AddProduct,
    getProduct,
    getProductWithReviews,
    addProductInBulk
}