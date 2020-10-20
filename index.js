const express = require('express');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const SwaggerExpress = require('swagger-express-mw-fork');

// eslint-disable-next-line no-unused-vars
const models = require('./src/models/models');
const swaggerDocument = require('./src/routes/swagger');
const config = require('./config/config');

const app = express();
const PORT = process.env.PORT || 8000;

mongoose.connect('mongodb://localhost/blockchain', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, resp) => {
  resp.send('Hello World!');
});

SwaggerExpress.create(config, (err, swaggerExpress) => {
  if (err) {
    throw err;
  }

  swaggerExpress.register(app);

  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is running on PORT: ${PORT}`);
  });
});
