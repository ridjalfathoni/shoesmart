module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
        nama_product: {
            type: Sequelize.STRING
        },
        merk: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.BOOLEAN
        }
    });

    return Product;
}