const mongoose = require('mongoose');

const Schema = require('../models/models');

const Department = mongoose.model('department', Schema.DepartmentSchema);

const departmentAddNew = (req, res) => {
  const department = new Department({
    Name: req.body.name,
    Description: req.body.description,
    Status: 'active',
  });
  department
    .save()
    .then((result) => {
      res.status(201).json({ createdDepartment: result });
    })
    .catch((err) => {
      res.status(404).json({ error: err, code: 'DE104' }); // Is it correct the error code???
    });
};

const departmentGetAll = (req, res) => {
  Department.find({}, (err, departments) => {
    if (err) {
      res.status(404).json({ error: 'No departments in DB', code: 'DEP104' });
    } else {
      res.status(200).json({ departments });
    }
  });
};

const departmentGetById = (req, res) => {
  Department.findById(req.params.departmentId, (err, department) => {
    if (err) {
      res.status(404).json({ error: `No department with id: ${req.params.departmentId} found on DB`, code: 'DEP105' });
    } else {
      res.status(200).json({ department });
    }
  });
};

const departmentUpdateById = (req, res) => {
  // Why are your defining an updated customer here?
  const updatedCustomer = {
    Name: req.body.name,
    Description: req.body.description,
  };
  Department.findByIdAndUpdate(req.params.departmentId, { updatedCustomer }, (err, department) => {
    if (err) {
      res.status(404).json({ error: `No department with id: ${req.params.departmentId} found on DB`, code: 'DEP105' });
    } else {
      // I guess you were trying to return the department, were not you?
      res.staus(200).json({ department });
    }
  });
};

const departmentRemoveById = (req, res) => {
  Department.findByIdAndUpdate(req.params.departmentId, { Status: 'deleted' }, (err, department) => {
    if (err) {
      res.status(404).json({ error: `No customer with id: ${req.params.departmentId} found on DB`, code: 'DEP105' });
    } else {
      res.status(200).json(department.Status);
    }
  });
};

module.exports = {
  departmentAddNew,
  departmentGetAll,
  departmentGetById,
  departmentUpdateById,
  departmentRemoveById,
};
