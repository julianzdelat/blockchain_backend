const {
  paymentAddNew,
  paymentGetAll,
  paymentGetById,
  paymentUpdateById,
  paymentRemoveById,
} = require('../controllers/paymentController');

const paymentRoutes = (app) => {
  app.route('/payments')
    .post(paymentAddNew)
    .get(paymentGetAll);
  app.route('/payment/:paymentId')
    .get(paymentGetById)
    .put(paymentUpdateById)
    .delete(paymentRemoveById);
};

module.exports = paymentRoutes;
