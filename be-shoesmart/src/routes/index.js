module.exports = ((app,router) => {
    require('./user.routes')(app,router);
    require('./auth.routes')(app,router);
})