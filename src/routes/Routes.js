const customerRoutes = require('./customerRoutes');
const itemRoutes = require('./itemRoutes');
const paymentRoutes = require('./paymentRoutes');
const paymentTypeRoutes = require('./paymentTypeRoutes');

const Routes = (app) => {
  customerRoutes(app);
  itemRoutes(app);
  paymentRoutes(app);
  paymentTypeRoutes(app);
};

module.exports = Routes;
