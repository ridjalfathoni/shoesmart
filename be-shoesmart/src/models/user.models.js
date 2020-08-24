/**
 * These columns will be generated automatically: 
 * id, title, description, published, createdAt, updatedAt.
 * create a new Post: create(object)
 * find a Post by id: findByPk(id)
 * get all Posts: findAll()
 * update a Post by id: update(data, where: { id: id })
 * remove a Post: destroy(where: { id: id })
 * remove all Posts: destroy(where: {})
 * find all Posts by title: findAll({ where: { title: ... } })
 * These functions will be used in our Controller.
 */
const bcrypt = require('bcrypt');

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        username: {
            type: Sequelize.STRING,
            unique: true
        },
        email: {
            type: Sequelize.STRING,
            unique: true
        },
        password: {
            type: Sequelize.STRING
        },
        role: {
            type: Sequelize.STRING
        }
    }, {
        hooks : {
            afterValidate: function (users) {
                users.password = users.password && users.password != "" ? bcrypt.hashSync(users.password, 10) : "";
            }
        }
    });

    return User;
}