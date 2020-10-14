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

module.exports = {
    customerAddNew,
}