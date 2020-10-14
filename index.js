const express = require('express');
const mongoose = require('mongoose');

// eslint-disable-next-line no-unused-vars
const models = require('./models/models.js');

const app = express();
const PORT = process.env.PORT || 9090;

mongoose.connect('mongodb://localhost/blockchain', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on PORT: ${PORT}`);
});
