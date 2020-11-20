const customerRoutes = require('./customerRoutes');
const departmentRoutes = require('./departmentRoutes');
const itemRoutes = require('./itemRoutes');
const itemTypeRoutes = require('./itemTypeRoutes');
<<<<<<< HEAD
const depGroupRoutes = require('./depGroupRoutes');
=======
const paymentRoutes = require('./paymentRoutes');
const paymentTypeRoutes = require('./paymentTypeRoutes');
>>>>>>> 11cde301abb7426024b8a6c0f1d55b4a594ee391

const Routes = (app) => {
  customerRoutes(app);
  departmentRoutes(app);
  itemRoutes(app);
  itemTypeRoutes(app);
<<<<<<< HEAD
  depGroupRoutes(app);
=======
  paymentRoutes(app);
  paymentTypeRoutes(app);
>>>>>>> 11cde301abb7426024b8a6c0f1d55b4a594ee391
};

module.exports = Routes;
