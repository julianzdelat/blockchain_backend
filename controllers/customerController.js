const mongoose = require('mongoose');
const CustomerSchema = require('../models/models.js');
const Customer = mongoose.model('customer', CustomerSchema);

const customerAddNew = (req, res, next) => {
    const customer = new Customer({
        ClientNumber: req.body.clientnumber,
        Name: req.body.name,
        LastName: req.body.lastname,
        Address: req.body.address,
        City: req.body.city,
        State: req.body.state,
        Zipcode: req.body.zipcode,
        PhoneHome: req.body.phonehome,
        MobilePhone: req.body.mobilephone,
        WorkPhone: req.body.workphone,
        Status: 'active',
        BirthDate: req.body.birthdate,
        Sex: req.body.sex,
        PointsEarned: 0
    });
    customer
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({createdCustomer: result});
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
}

const customerGetALL = (req, res, next) => {
    Customer.find({}, (err, customers)=> {
        if (err){
            res.status(404).json({error: "No customers in DB", code:"CU104"});
        }else{
            res.status(200).json(customers);
        }
    });
}

const customerGetById = (req, res, next) => {
    Customer.findById(req.body._id, (err, customer)=>{
        if (err){
            res.status(404).json({error: "No customer with id: "+ req.body._id + " found on DB", code:"CU105"});
        }else{
            res.status(200).json({customer});
        }
    });
}

const customerRemoveById = (req, res, next) => {
    Customer.findByIdAndUpdate(req.body._id, {Status: 'deleted'} ,(err, customer) =>{
        if(err){
            res.status(404).json({error:"No customer with id: "+ req.body._id + " found on DB", code:"CU105"})
        }else{
            res.status(200).json({customer});
        }
    })
}

const customerUpdateById = (req, res, next) =>{
    let updatedCustomer = {
            ClientNumber: req.body.clientnumber,
            Name: req.body.name,
            LastName: req.body.lastname,
            Address: req.body.address,
            City: req.body.city,
            State: req.body.state,
            Zipcode: req.body.zipcode,
            PhoneHome: req.body.phonehome,
            MobilePhone: req.body.mobilephone,
            WorkPhone: req.body.workphone,
            BirthDate: req.body.birthdate,
            Sex: req.body.sex
    }
    Customer.findByIdAndUpdate(req.body._id, {updatedCustomer},(err, customer) => {
        if (err){
            res.status(404).json({error: "No customer with id: "+ req.body._id + " found on DB", code:"CU105"})
        }else{
            res.staus(200).json({customer})
        }
    })
}

module.exports = {
    customerAddNew,
    customerGetAll,
    customerGetById,
    customerRemoveById,
    customerUpdateById
}