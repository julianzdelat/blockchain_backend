const mongoose = require('mongoose');

const Schema = require('../models/models');

const ItemType = mongoose.model('itemType', Schema.ItemTypeSchema);

const itemTypeAddNew = (req, res) => {
  const itemType = new ItemType({
    TypeName: req.body.typeName,
    AgeNeeded: req.body.ageNeeded,
  });
  itemType
    .save()
    .then((result) => {
      res.status(201).json({ createdItemType: result });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

const itemTypeGetAll = (req, res) => {
  ItemType.find({}, (err, itemTypes) => {
    if (err) {
      res.status(404).json({ error: 'No item types in DB', code: 'IT104' });
    } else {
      res.status(200).json(itemTypes);
    }
  });
};

const itemTypeGetById = (req, res) => {
  ItemType.findById(req.params.itemTypeId, (err, itemType) => {
    if (err) {
      res.status(404).json({ error: `No item types with id: ${req.params.itemTypeId}, found on DB`, code: 'IT105' });
    } else {
      res.status(200).json({ itemType });
    }
  });
};

const itemTypeUpdateById = (req, res) => {
  const updatedItemType = {
    TypeName: req.body.typeName,
    AgeNeeded: req.body.ageNeeded,
  };
  ItemType.findByIdAndUpdate(req.params.itemTypeId, { updatedItemType }, (err, itemType) => {
    if (err) {
      res.status(404).json({ error: `No item type with id: ${req.params.itemTypeId} found on DB`, code: 'IT105' });
    } else {
      res.staus(200).json({ itemType });
    }
  });
};

const itemTypeRemoveById = (req, res) => {
  ItemType.findByIdAndUpdate(req.params.itemTypeId, { Status: 'deleted' }, (err, itemType) => {
    if (err) {
      res.status(404).json({ error: `No item type with id: ${req.params.itemTypeId} found on DB`, code: 'IT105' });
    } else {
      res.status(200).json(itemType.Status);
    }
  });
};

module.exports = {
  itemTypeAddNew,
  itemTypeGetAll,
  itemTypeGetById,
  itemTypeUpdateById,
  itemTypeRemoveById,
};
