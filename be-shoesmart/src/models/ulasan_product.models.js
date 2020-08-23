module.exports = (sequelize, Sequelize) => {
    const HargaProduct = sequelize.define("ulasan_product", {
        ulasan: {
            type: Sequelize.STRING
        }
    });

    return HargaProduct;
}