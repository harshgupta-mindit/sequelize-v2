module.exports = (sequelize, DataTypes) => {

    const Review = sequelize.define('reviews', {
        reviewMessage: {
            type: DataTypes.STRING
        },
        reviewPoints: {
            type: DataTypes.INTEGER
        }
    }
    )


    return Review;

}