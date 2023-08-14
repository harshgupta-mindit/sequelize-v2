module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: 'admin',
    DB: 'sequelize_v2',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idel: 10000
    }
}