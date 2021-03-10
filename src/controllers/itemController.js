const mongoose = require('mongoose');

const Schema = require('../models/models.js');

const Item = mongoose.model('item', Schema.ItemSchema);

const itemAddNew = (req, res) => {
  const item = new Item({
    Name: req.body.name,
    Description: req.body.description,
    UnitPrice: req.body.unitPrice,
    Quantity: req.body.quantity,
    Inventory: req.body.inventory,
    IsAgeNeeded: req.body.isAgeNeeded,
    Barcode: req.body.barcode,
    Status: 'active',
  });
  item
    .save()
    .then((result) => {
      res.status(201).json({ createdItem: result });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

const itemGetAll = (req, res) => {
  Item.find({}, (err, items) => {
    if (err) {
      res.status(404).json({ error: 'No items in DB', code: 'IT104' });
    } else {
      res.status(200).json(items);
    }
  });
};

const itemGetById = (req, res) => {
  Item.findById(req.params.itemId, (err, item) => {
    if (err) {
      res.status(404).json({ error: `No item with id: ${req.params.itemId}, found on DB`, code: 'IT105' });
    } else {
      res.status(200).json({ item });
    }
  });
};

const itemUpdateById = (req, res) => {
  const updatedItem = {
    Name: req.body.name,
    Description: req.body.description,
    UnitPrice: req.body.unitPrice,
    Quantity: req.body.quantity,
    Inventory: req.body.inventory,
    IsAgeNeeded: req.body.isAgeNeeded,
    Barcode: req.body.barcode,
    Status: req.body.status,
  };
  Item.findByIdAndUpdate(req.params.itemId, { updatedItem }, (err, item) => {
    if (err) {
      res.status(404).json({ error: `No item with id: ${req.params.itemId} found on DB`, code: 'IT105' });
    } else {
      res.status(200).json({ item });
    }
  });
};

const itemRemoveById = (req, res) => {
  Item.findByIdAndUpdate(req.params.itemId, { Status: 'deleted' }, (err) => {
    if (err) {
      res.status(404).json({ error: `No item with id: ${req.params.itemId} found on DB`, code: 'IT105' });
    } else {
      res.status(200).json();
    }
  });
};

module.exports = {
  itemAddNew,
  itemGetAll,
  itemGetById,
  itemUpdateById,
  itemRemoveById,
};
