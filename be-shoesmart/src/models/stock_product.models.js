module.exports = (sequelize, Sequelize) => {
    const StockProduct = sequelize.define("stock_product", {
        stock: {
            type: Sequelize.STRING
        }
    });

    return StockProduct;
}