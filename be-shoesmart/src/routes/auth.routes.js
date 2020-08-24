const auth = require('../controllers/auth.controller');

module.exports = ((app,router) => {
    router.post('/login', auth.login)
    router.post('/generateAdmin', auth.generateAdmin)
    app.use("/api", router);
})