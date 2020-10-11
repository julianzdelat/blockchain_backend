const express = require('express');
const mongoose = require('mongoose');

const models = require('./models/models.js');

const app = express();
const PORT = process.env.PORT || 9090;

mongoose.connect('mongodb://localhost/blockchain', {
    useNewUrlParser : true,
    useUnifiedTopology: true
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
});