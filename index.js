const express = require('express');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const SwaggerExpress = require('swagger-express-mw-fork');
const bodyParser = require('body-parser');

// eslint-disable-next-line no-unused-vars
const models = require('./src/models/models');
const swaggerDocument = require('./src/routes/swagger');
const config = require('./config/config');

mongoose.connect('mongodb://localhost/blockchain2', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express();
const PORT = process.env.PORT || 8000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
//uncomment the following 2 lines to test the routes
//and modify the testRoutes.js file
const test = require('./src/routes/testRoutes.js');
test(app);


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
