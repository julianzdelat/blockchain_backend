const {
  customerAddNew,
  customerGetAll,
  customerGetById,
  customerUpdateById,
  customerRemoveById,
} = require('../controllers/customerController');

const customerRoutes = (app) => {
  app.route('/customers')
    .post(customerAddNew)
    .get(customerGetAll);
  app.route('/customer/:customerId')
    .get(customerGetById)
    .put(customerUpdateById)
    .delete(customerRemoveById);
};

module.exports = customerRoutes;
