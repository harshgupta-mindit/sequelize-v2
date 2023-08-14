const db = require('../models/index');
const Review = db.reviews;

const AddReview = async (req, res) => {
    const data = {
        reviewMessage: req.body.reviewMessage,
        reviewPoints: req.body.reviewPoints
    }
    await Review.create(data).then(()=> {
        console.log("Data Added success !!!");
        res.status(200).json(data);
    }).catch((err)=> {
        console.log(err);
    })
}



const getReview = async (req, res) => {
    await Review.findAll()
    .then((data)=> {
        console.log("Review list fetched success !!!");
        res.status(200).json(data);
    })
    .catch((err)=> {
        console.log(err);
    })
}



module.exports = {
    AddReview,
    getReview
}