const fs = require('fs');
const dbConfig = require('../config/config');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.min,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
// db.users = require('./User.models.js')(sequelize, Sequelize);
fs
    .readdirSync(__dirname)
    .filter((file) => 
        file !== 'index.js'
    ).forEach((result) => {
        var fileName = result.replace('.models.js','');
        db[fileName] = require('./'+result)(sequelize, Sequelize);
    })

// association
db.user.hasOne(db.detail_user);
db.user.hasMany(db.ulasan_product);
db.product.hasMany(db.size_product);
db.product.hasMany(db.ulasan_product);
db.size_product.hasMany(db.warna_product);
db.warna_product.hasMany(db.stock_product);
db.product.hasMany(db.harga_product);
db.product.hasOne(db.transaksi);
db.product.hasOne(db.cart);
module.exports = db;