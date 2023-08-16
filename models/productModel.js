module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('products',{
        title:{
            type: DataTypes.STRING,
            allowNull: false,
            validate : true
        },
        product_id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            validate : true
        },
        price: {
            type: DataTypes.INTEGER,
            validate : true
        },
        description: {
            type: DataTypes.TEXT,
            validate : true
        },
        published: {
            type: DataTypes.BOOLEAN,
            validate : true
        }
    })

    return Product;
}

