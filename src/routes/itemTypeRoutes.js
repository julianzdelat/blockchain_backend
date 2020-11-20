const {
  itemTypeAddNew,
  itemTypeGetAll,
  itemTypeGetById,
  itemTypeUpdateById,
  itemTypeRemoveById,
} = require('../controllers/itemTypeController');

const itemTypeRoutes = (app) => {
  app.route('/itemTypes')
    .post(itemTypeAddNew)
    .get(itemTypeGetAll);
  app.route('/itemType/:itemTypeId')
    .get(itemTypeGetById)
    .put(itemTypeUpdateById)
    .delete(itemTypeRemoveById);
};

module.exports = itemTypeRoutes;
