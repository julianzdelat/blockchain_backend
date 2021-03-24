const { modelNames } = require('mongoose');
const {
    orderAddNew,
    orderGetAll,
    orderGetById,
    orderUpdateById,
    orderRemoveById,
} = require('../controllers/orderController');

const orderRoutes = (app) => {
    app.route('/orders')
        .post(orderAddNew)
        .get(orderGetAll);
    app.route('/order/:orderId')
        .get(orderGetById)
        .put(orderUpdateById)
        .delete(orderRemoveById);
};

module.exports = orderRoutes;