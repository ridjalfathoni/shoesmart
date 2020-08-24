const db = require('../models');
const User = db.user;
const helper = require('../helper');

module.exports = {
    async registerUser(req, res) {
        
        // Validate request
        if (!req.body.username) {
            res.status(400).send({
                message: "Username Kosong!"
            });
            return;
        }
        const checkUser = await User.findOne({
            where: {
                username: req.body.username
            }
        })

        const checkEmail = await User.findOne({
            where: {
                email: req.body.email
            }
        })

        if (checkUser != null && checkEmail != null) {
            res.status(400).send({
                success: false,
                message: "Username & Email Sudah Ada"
            })
        } else if (checkUser != null) {
            res.status(400).send({
                success: false,
                message: "Username Sudah Ada"
            })
        } else if (checkEmail != null) {
            res.status(400).send({
                success: false,
                message: "Email Sudah Ada"
            })
        }

        console.log("checkUser", checkUser);
        // Create User
        const user = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            role: 'User'
        }
        User.create(user).then((result) => {
            let userData = {
                id: result.id,
                username: result.username,
                email: result.email,
                role: result.role
            }
            const token = helper.generateToken(userData);
            const refreshToken = helper.generateRefreshToken(userData);
            res.send({
                data: {
                    token: token,
                    refreshToken: refreshToken
                },
                success: true,
                message: "Register Berhasil!"
            });
        }).catch((err) => {
            res.status(500).send({
                message: "Terjadi Kesalahan ketika Register" || err.message 
            });
        });
    },
    
}