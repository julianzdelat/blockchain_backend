const mongoose = require('mongoose');

const Schema = require('../models/models.js');

const Customer = mongoose.model('customer', Schema.CustomerSchema);

const customerAddNew = (req, res) => {
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
      res.status(201).json({ createdCustomer: result });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

const customerGetAll = (req, res) => {
  Customer.find({}, (err, customers) => {
    if (err) {
      res.status(404).json({ error: 'No customers in DB', code: 'CU104' });
    } else {
      res.status(200).json(customers);
    }
  });
};

const customerGetById = (req, res) => {
  Customer.findById(req.params.customerId, (err, customer) => {
    if (err) {
      res.status(404).json({ error: `No customer with id: ${req.params.customerId}, found on DB`, code: 'CU105' });
    } else {
      res.status(200).json({ customer });
    }
  });
};

const customerRemoveById = (req, res) => {
  Customer.findByIdAndUpdate(req.params.customerId, { Status: 'deleted' }, (err, customer) => {
    if (err) {
      res.status(404).json({ error: `No customer with id: ${req.params.customerId} found on DB`, code: 'CU105' });
    } else {
      res.status(200).json(customer.Status);
    }
  });
};

const customerUpdateById = (req, res) => {
  const updatedCustomer = {
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
    Sex: req.body.sex,
  };
  Customer.findByIdAndUpdate(req.params.customerId, { updatedCustomer }, (err, customer) => {
    if (err) {
      res.status(404).json({ error: `No customer with id: ${req.params.customerId} found on DB`, code: 'CU105' });
    } else {
      res.staus(200).json({ customer });
    }
  });
};

module.exports = {
  customerAddNew,
  customerGetAll,
  customerGetById,
  customerUpdateById,
  customerRemoveById,
};
