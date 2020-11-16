const {
  departmentAddNew,
  departmentGetAll,
  departmentGetById,
  departmentUpdateById,
  departmentRemoveById,
} = require('../controllers/departmentController');

const departmentRoutes = (app) => {
  app.route('/departments')
    .post(departmentAddNew)
    .get(departmentGetAll);
  app.route('/department/:departmentId')
    .get(departmentGetById)
    .put(departmentUpdateById)
    .delete(departmentRemoveById);
};

module.exports = departmentRoutes;
