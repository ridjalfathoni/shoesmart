module.exports = ((app,router) => {
    // const user = require('../controllers/user.controller');

    router.post('/test', (req, res) => {
        res.send({
            message: `Test ${req.body.email}! test Masuk Bro`
        })
    })
    
    app.use("/api/userServices", router);
})