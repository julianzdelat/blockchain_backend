const mongoose = require('mongoose');

const Schema = require('../models/models.js');

const Order = mongoose.model('order', Schema.OrderSchema);

const orderAddNew = (req, res) => {
    const order = new Schema.OrderSchema({
        OrderNumber: req.body.orderNumber,
        Date: req.body.date,
        CustomerId: req.body.customerId,
        Status: req.body.status,
        Items: req.body.items,
        Payments: req.body.payments,
        TotalItems: req.body.totalItems,
        TotalPayments: req.body.TotalPayments
    });
    order
        .save()
        .then((result) => {
            res.status(201).json({ createItem: result });
        })
        .catch((err) => {
            res.status(500).json({ error: err });
        });
};

const orderGetAll = (req, res) => {
    Order.findById(req.params.orderId, (err, order) => {
        if (err) {
            res.status(404).json({ error: `No item with id: ${req.params.orderId}, found on DB`, code: 'IT105'});
        } else {
            res.status(200).json({ order });
        }
    });
};

const orderGetById = (req, res) => {
    Order.findById(req.params.orderId, (err, order) => {
        if (err) {
            res.status(404).json({ error: `No order with id: ${req.params.orderId}, found on DB`, code: 'IT105'});
        } else {
            res.status(200).json({ order });
        }
    });
};

const orderUpdateById = (req, res) => {
    const updateOrder = {
        OrderNumber: req.body.orderNumber,
        Date: req.body.date,
        CustomerId: req.body.customerId,
        Status: req.body.status,
        Items: req.body.items,
        Payments: req.body.payments,
        TotalItems: req.body.totalItems,
        TotalPayments: req.body.TotalPayments
    };
    Order.findByIdAndUpdate(req.params.orderId, { updateOrder }, (err, order) => {
        if (err) {
            res.status(404).json({ error: `No order with id: ${req.params.orderId} found on DB`, code:'IT105'});
        } else {
            res.status(200).json({ order });
        }
    });
};

const orderRemoveById = (req, res) => {
    Order.findByIdAndUpdate(req.params.orderId, { Status: 'deleted' }, (err) => {
        if (err) {
            res.status(404).json({ error: `No order with id: ${req.params.orderId} founds on DB`, code: 'IT105'});
        } else {
            res.status(200).json();
        }
    });
};

module.exports = {
    orderAddNew,
    orderGetAll,
    orderGetById,
    orderUpdateById,
    orderRemoveById
};