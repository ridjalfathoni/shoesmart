module.exports = (sequelize, Sequelize) => {
    const Transaksi = sequelize.define("transaksi_product", {
        status: {
            type: Sequelize.STRING
        }
    });

    return Transaksi;
}