const {
  paymentTypeAddNew,
  paymentTypeGetAll,
  paymentTypeGetById,
  paymentTypeUpdateById,
  paymentTypeRemoveById,
} = require('../controllers/paymentTypeController');

const paymentRoutes = (app) => {
  app.route('/paymentTypes')
    .post(paymentTypeAddNew)
    .get(paymentTypeGetAll);
  app.route('/paymentType/:paymentTypeId')
    .get(paymentTypeGetById)
    .put(paymentTypeUpdateById)
    .delete(paymentTypeRemoveById);
};

module.exports = paymentRoutes;
