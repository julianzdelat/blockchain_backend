const mongoose = require('mongoose');
const DepartmentSchema = require('../models/models.js');
const Department = mongoose.model('department', DepartmentSchema);

const departmentAddNew = (req, res, next) => {
    const department = new Department ({
        Name: req.body.name,
        Description: req.body.description,
        Status: 'active'
    });
    department
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({createdDepartment: result});
        })
        .catch(err => {
            console.log(err);
            res.status(404).json({error: err, code:"DE104"});
        });
}