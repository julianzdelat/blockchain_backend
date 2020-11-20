const {
    departmentGroupAddNew,
    departmentGroupGetAll,
    departmentGroupGetById,
    departmentGroupUpdateById,
    departmentGroupRemoveById,
  } = require('../controllers/depGroupController');
  
  const depGroupRoutes = (app) => {
    app.route('/departmentGroups')
      .post(departmentGroupAddNew)
      .get(departmentGroupGetAll);
    app.route('/departmentGroup/:departmentGroupId')
      .get(departmentGroupGetById)
      .put(departmentGroupUpdateById)
      .delete(departmentGroupRemoveById);
  };
  
  module.exports = depGroupRoutes;
  