const mongoose = require('mongoose');

const Schema = require('../models/models');

const PaymentType = mongoose.model('paymentType', Schema.PaymentTypeSchema);

const paymentTypeAddNew = (req, res) => {
  const paymentType = new PaymentType({
    Name: req.body.name,
    Description: req.body.description,
    Status: req.body.status,
  });
  paymentType
    .save()
    .then((result) => {
      res.status(201).json({ createdPaymentType: result });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

const paymentTypeGetAll = (req, res) => {
  PaymentType.find({}, (err, paymentTypes) => {
    if (err) {
      res.status(404).json({ error: 'No payment types in DB', code: 'PT104' });
    } else {
      res.status(200).json(paymentTypes);
    }
  });
};

const paymentTypeGetById = (req, res) => {
  PaymentType.findById(req.params.paymentTypeId, (err, paymentType) => {
    if (err) {
      res.status(404).json({ error: `No payment types with id: ${req.params.paymentTypeId}, found on DB`, code: 'PT105' });
    } else {
      res.status(200).json({ paymentType });
    }
  });
};

const paymentTypeUpdateById = (req, res) => {
  const updatedPaymentType = {
    Name: req.body.name,
    Description: req.body.description,
  };
  PaymentType.findByIdAndUpdate(req.params.paymentTypeId, { updatedPaymentType },
    (err, paymentType) => {
      if (err) {
        res.status(404).json({ error: `No payment type with id: ${req.params.paymentTypeId} found on DB`, code: 'PT105' });
      } else {
        res.status(200).json({ paymentType });
      }
    });
};

const paymentTypeRemoveById = (req, res) => {
  PaymentType.findByIdAndUpdate(req.params.paymentTypeId, { Status: 'deleted' }, (err) => {
    if (err) {
      res.status(404).json({ error: `No payment type with id: ${req.params.paymentTypeId} found on DB`, code: 'PT105' });
    } else {
      res.status(200).json();
    }
  });
};

module.exports = {
  paymentTypeAddNew,
  paymentTypeGetAll,
  paymentTypeGetById,
  paymentTypeUpdateById,
  paymentTypeRemoveById,
};
