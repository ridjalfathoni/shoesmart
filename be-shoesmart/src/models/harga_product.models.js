module.exports = (sequelize, Sequelize) => {
    const HargaProduct = sequelize.define("harga_product", {
        harga: {
            type: Sequelize.STRING
        },
        type: {
            type: Sequelize.STRING
        }
    });

    return HargaProduct;
}