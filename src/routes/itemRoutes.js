const {
  itemAddNew,
  itemGetAll,
  itemGetById,
  itemUpdateById,
  itemRemoveById,
} = require('../controllers/itemController');

const itemRoutes = (app) => {
  app.route('/items')
    .post(itemAddNew)
    .get(itemGetAll);
  app.route('/item/:itemId')
    .get(itemGetById)
    .put(itemUpdateById)
    .delete(itemRemoveById);
};

module.exports = itemRoutes;