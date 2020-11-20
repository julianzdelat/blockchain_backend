const customerRoutes = require('./customerRoutes');
const departmentRoutes = require('./departmentRoutes');
const departmentGroupRoutes = require('./departmentGroupRoutes');
const itemRoutes = require('./itemRoutes');
const itemTypeRoutes = require('./itemTypeRoutes');
const paymentRoutes = require('./paymentRoutes');
const paymentTypeRoutes = require('./paymentTypeRoutes');

const Routes = (app) => {
  customerRoutes(app);
  departmentRoutes(app);
  departmentGroupRoutes(app);
  itemRoutes(app);
  itemTypeRoutes(app);
  paymentRoutes(app);
  paymentTypeRoutes(app);
};

module.exports = Routes;
