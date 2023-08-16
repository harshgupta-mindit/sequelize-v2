module.exports = (sequelize, DataTypes) => {

    const Review = sequelize.define('reviews', {
        reviewMessage: {
            type: DataTypes.STRING
        },
        reviewPoints: {
            type: DataTypes.INTEGER
        },
        product_id: {
            type: DataTypes.INTEGER
        }
    }
    )


    return Review;

}