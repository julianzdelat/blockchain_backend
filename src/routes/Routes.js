const customerRoutes = require('./customerRoutes');
const departmentRoutes = require('./departmentRoutes');
const itemTypeRoutes = require('./itemTypeRoutes');

const Routes = (app) => {
  customerRoutes(app);
  departmentRoutes(app);
  itemTypeRoutes(app);
};

module.exports = Routes;
