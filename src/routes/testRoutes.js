const mongoose = require('mongoose');
const Schema = require('../models/models.js');
const Customer = mongoose.model('customer', Schema.CustomerSchema);

const test = (app) => {

    app.route('/customer')
        .post((req,res) => {
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
                PointsEarned: 0,
                });
            customer
                .save()
                .then((result) => {
                    console.log(result);
                    res.status(201).json({ createdCustomer: result });
                })
                .catch((err) => {
                    console.log(err);
                    res.status(500).json({ error: err });
                });
        })
    app.route('/customers')
        .get((req, res) =>{
            Customer.find({}, (err, customers) => {
                if (err) {
                  res.status(404).json({ error: 'No customers in DB', code: 'CU104' });
                } else {
                  res.status(200).json(customers);
                }
            });
        })
    app.route('/customer/:customerId')
        .get((req, res) => {
            Customer.findById(req.params.customerId, (err, customer) => {
                if (err) {
                  res.status(404).json({ error: `No customer with id: ${req.params.customerId}, found on DB`, code: 'CU105' });
                } else {
                  res.status(200).json({ customer });
                }
            });
        })
        .delete((req, res) => {
            Customer.findByIdAndUpdate(req.params.customerId, { Status: 'deleted' }, (err, customer) => {
                if (err) {
                  res.status(404).json({ error: `No customer with id: ${req.params.customerId} found on DB`, code: 'CU105' });
                } else {
                  res.status(200).json(customer.Status);
                }
            });
        })
    }

    module.exports = test;