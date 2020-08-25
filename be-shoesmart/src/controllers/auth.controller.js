const db = require('../models');
const User = db.user;
const helper = require('../helper');
const jwt = require("jsonwebtoken");

module.exports = {
    generateAdmin(req, res) {
        // Create Admin
        const user = {
            username: "admin",
            password: "admin",
            email: "admin@gmail.com",
            role: 'Admin'
        }

        User.create(user)
            .then((result) => {
                res.send(result);
            }).catch((err) => {
                res.status(500).send({
                    message:
                        err.message || "Some error occured while creating the User"
                });
            });
    },
    async login(req,res) {
        try {
            const { username, password } = req.body;
            const user = await User.findOne({
                where: {
                    username: username
                }
            });
            
             if (!username) {
                res.status(400).send({
                    success: false,
                    message: "Username belum kosong"
                });
            } else if (!password) {
                res.status(400).send({
                    success: false,
                    message: "Password belum diisi"
                });
            } else if (!user) {
                return res.status(403).send({
                    success: false,
                    message: 'Username salah!'
                })
            }

            if (helper.bcryptCompareSync(password, user.password)) {
                let userData = {
                    id: user.id,
                    username: user.username,
                    email: user.email,
                    role: user.role
                }
                
                let token = helper.generateToken(userData);
                let refreshToken = helper.generateRefreshToken(userData);
                res.json({
                    data: {
                        token: token,
                        refreshToken: refreshToken,
                    },
                    success: true
                })
            } else {
                res.status(400).send({
                    success: false,
                    message: "Password anda Salah"
                });
            }
        } catch (error) {
            res.status(400).send(
                {
                    success: false,
                    message: "Kesalahan Ketika Login!"
                }
            )
        }
    },
    token(req, res){
        const refreshToken = req.body.token;
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN, (err, result) => {
            if (err) {
                return res.status(400).send({
                    success: false,
                    message: "Token expired"
                })
            }

            let userData = {
                id: result.id,
                username: result.username,
                email: result.email,
                role: result.role
            }

            const token = helper.generateToken(userData)

            res.send({
                token: token
            })
        })
    }
    
}