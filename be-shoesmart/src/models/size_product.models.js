module.exports = (sequelize, Sequelize) => {
    const SizeProduct = sequelize.define("size_product", {
        size: {
            type: Sequelize.STRING
        }
    });

    return SizeProduct;
}