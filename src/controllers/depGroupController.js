const mongoose = require('mongoose');

const Schema = require('../models/models');

const DepartmentGroup = mongoose.model('department', Schema.DepartmentGroupSchema);

const departmentGroupAddNew = (req, res) => {
    const department = new DepartmentGroup({
      Name: req.body.name,
      Description: req.body.description,
      Department: req.body.department,
      Status: 'active',
    });
    department
      .save()
      .then((result) => {
        res.status(201).json({ createdDepartmentGroup: result });
      })
      .catch((err) => {
        res.status(404).json({ error: err, code: 'DG104' }); // Is it correct the error code???
      });
  };

  const departmentGroupGetAll = (req, res) => {
    DepartmentGroup.find({}, (err, departmentGroups) => {
      if (err) {
        res.status(404).json({ error: 'No departments in DB', code: 'DG104' });
      } else {
        res.status(200).json({ departmentGroups });
      }
    });
  };
  
  const departmentGroupGetById = (req, res) => {
    DepartmentGroup.findById(req.params.departmentGroupId, (err, departmentGroups) => {
      if (err) {
        res.status(404).json({ error: `No department with id: ${req.params.departmentId} found on DB`, code: 'DG105' });
      } else {
        res.status(200).json({ departmentGroups });
      }
    });
  };
  
  const departmentGroupUpdateById = (req, res) => {
    const updatedDepartmentGroup = {
      Name: req.body.name,
      Department: req.body.department,
      Description: req.body.description,
    };
    DepartmentGroup.findByIdAndUpdate(req.params.departmentGroupId, { updatedDepartmentGroup }, (err, departmentGroup) => {
      if (err) {
        res.status(404).json({ error: `No department with id: ${req.params.departmentId} found on DB`, code: 'DG105' });
      } else {
        res.staus(200).json({ departmentGroup });
      }
    });
  };
  
  const departmentGroupRemoveById = (req, res) => {
    DepartmentGroup.findByIdAndUpdate(req.params.departmentGroupId, { Status: 'deleted' }, (err, departmentGroup) => {
      if (err) {
        res.status(404).json({ error: `No customer with id: ${req.params.departmentGroupId} found on DB`, code: 'DG105' });
      } else {
        res.status(200).json(departmentGroup.Status);
      }
    });
  };
  
  module.exports = {
    departmentGroupAddNew,
    departmentGroupGetAll,
    departmentGroupGetById,
    departmentGroupUpdateById,
    departmentGroupRemoveById,
  };
  