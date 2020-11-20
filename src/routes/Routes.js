const customerRoutes = require('./customerRoutes');
const departmentRoutes = require('./departmentRoutes');
const itemTypeRoutes = require('./itemTypeRoutes');
const depGroupRoutes = require('./depGroupRoutes');

const Routes = (app) => {
  customerRoutes(app);
  departmentRoutes(app);
  itemTypeRoutes(app);
  depGroupRoutes(app);
};

module.exports = Routes;
