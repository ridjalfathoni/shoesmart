module.exports = (sequelize, Sequelize) => {
    const WarnaProduct = sequelize.define("warna_product", {
        warna: {
            type: Sequelize.STRING
        }
    });

    return WarnaProduct;
}