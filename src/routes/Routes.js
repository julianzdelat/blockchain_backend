const customerRoutes = require('./customerRoutes');
const departmentRoutes = require('./departmentRoutes');

const Routes = (app) => {
  customerRoutes(app);
  departmentRoutes(app);
};

module.exports = Routes;
