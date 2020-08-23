module.exports = (sequelize, Sequelize) => {
    const DetailUser = sequelize.define("detail_user", {
        nama_depan: {
            type: Sequelize.STRING
        },
        nama_belakang: {
            type: Sequelize.STRING
        },
        alamat: {
            type: Sequelize.STRING
        },
        no_hp: {
            type: Sequelize.STRING
        }
    });

    return DetailUser;
}