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

const departmentGetAll = (req, res) => {
    Department.find({}, (err, departments) =>{
        if(err){
            res.status(404).json({ error: 'No departments in DB', code: 'DEP104'});
        }else{
            res.status(200).json({ departments});
        }
    });
}

const departmentGetById = (req, res) => {
    Department.findById(req.params.departmentId, (err, department) => {
        if(err){
            res.status(404).json({ error: `No department with id: ${req.params.departmentId} found on DB`, code: 'DEP105'});
        }else{
            res.status(200).json({ department});
        }
    });
}

const departmentUpdateById = (req, res) => {
    const updatedCustomer = {
        Name: req.body.name,
        Description: req.body.description
    }
    Department.findByIdAndUpdate(req.params.departmentId, {updatedCustomer}, (err, department) =>{
        if(err){
            res.status(404).json({ error: `No department with id: ${req.params.departmentId} found on DB`, code: 'DEP105' });
    } else {
      res.staus(200).json({ customer });
    }
    });
}

const departmentRemoveById = (req, res) => {
    Department.findByIdAndUpdate(req.params.departmentId, { Status: 'deleted'}, (err, department)=>{
        if (err) {
            res.status(404).json({ error: `No customer with id: ${req.params.departmentId} found on DB`, code: 'DEP105' });
        } else {
            res.status(200).json(department.Status);
        }
    });
}

module.exports = {
    departmentAddNew,
    departmentGetAll, 
    departmentGetById,
    departmentUpdateById,
    departmentRemoveById
}