require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
let router = require('express').Router();

//  Models
const db = require("./models");

const app = express();

app.use(cors());
app.use(morgan('combined'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Sync Database
db.sequelize.sync();

app.get("/", (req, res) => {
    res.json({
        message: "ShoesMart Test"
    });
});

// User Routes
// require('./app/routes/User.routes')(app);
// require('./app/routes/Auth.routes')(app);
require('./routes/index')(app,router)
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server Berjalan di http://localhost:${PORT}`);
})