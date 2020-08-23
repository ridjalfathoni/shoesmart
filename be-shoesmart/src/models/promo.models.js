module.exports = (sequelize, Sequelize) => {
    const Promo = sequelize.define("promo", {
        nama_promo: {
            type: Sequelize.STRING
        },
        desc_promo: {
            type: Sequelize.STRING
        },
        potongan: {
            type: Sequelize.STRING
        },
    });

    return Promo;
}