const customerRoutes = require('./customerRoutes');
const itemRoutes = require('./itemRoutes');
const orderRoutes = require('./orderRoutes');
const paymentRoutes = require('./paymentRoutes');
const paymentTypeRoutes = require('./paymentTypeRoutes');

const Routes = (app) => {
  customerRoutes(app);
  itemRoutes(app);
  orderRoutes(app);
  paymentRoutes(app);
  paymentTypeRoutes(app);
};

module.exports = Routes;
