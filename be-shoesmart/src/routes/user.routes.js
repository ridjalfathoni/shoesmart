const user = require('../controllers/user.controller');

module.exports = ((app,router) => {
    router.post('/registerUser', user.registerUser)
    
    app.use("/api/userServices", router);
})