const mongoose = require('mongoose');

const Schema = require('../models/models.js');

const Payment = mongoose.model('payment', Schema.PaymentSchema);

const paymentAddNew = (req, res) => {
  const payment = new Payment({
    PaymentNumber: req.body.paymentNumber,
    PaymentTypeId: req.body.paymentTypeId,
    Amount: req.body.amount,
    Status: 'pending',
  });
  payment
    .save()
    .then((result) => {
      res.status(201).json({ createdPayment: result });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

const paymentGetAll = (req, res) => {
  Payment.find({}, (err, payments) => {
    if (err) {
      res.status(404).json({ error: 'No payments in DB', code: 'PA104' });
    } else {
      res.status(200).json(payments);
    }
  });
};

const paymentGetById = (req, res) => {
  Payment.findById(req.params.paymentId, (err, payment) => {
    if (err) {
      res.status(404).json({ error: `No payment with id: ${req.params.paymentId}, found on DB`, code: 'PA105' });
    } else {
      res.status(200).json({ payment });
    }
  });
};

const paymentUpdateById = (req, res) => {
  const updatedPayment = {
    PaymentNumber: req.body.paymentNumber,
    PaymentType: req.body.paymentTypeId,
    Amount: req.body.amount,
  };
  Payment.findByIdAndUpdate(req.params.paymentId, { updatedPayment }, (err, payment) => {
    if (err) {
      res.status(404).json({ error: `No payment with id: ${req.params.paymentId} found on DB`, code: 'PA105' });
    } else {
      res.status(200).json({ payment });
    }
  });
};

const paymentRemoveById = (req, res) => {
  Payment.findByIdAndUpdate(req.params.paymentId, { Status: 'deleted' }, (err) => {
    if (err) {
      res.status(404).json({ error: `No payment with id: ${req.params.paymentId} found on DB`, code: 'PA105' });
    } else {
      res.status(200).json();
    }
  });
};

module.exports = {
  paymentAddNew,
  paymentGetAll,
  paymentGetById,
  paymentUpdateById,
  paymentRemoveById,
};
