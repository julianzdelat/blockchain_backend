const mongoose = require('mongoose');

const Schema = require('../models/models.js');

const item = mongoose.model('item', Schema.ItemSchema);

const itemAddNew = (req, res) => {
  const item = new item({
    ShortDescription: req.body.shortdescription,
    UnitPrice: req.body.unitprice,
    SpecialPrice: req.body.lastname,
    OfferQuantity: req.body.offerquantity,
    ItemType: req.body.itemtype,
    Department: req.body.department,
    Wieghtable: req.body.weightable,
    PriceRequired: req.body.pricerequired,
    Inventory: req.body.inventory,
    AllowFoodStamps: req.body.allowfoodstamps, 
    QuantityAllowed: req.body.quantityallowed,
    QuantityRequired: req.body.quantityrequired,
    AuthorizedSale: req.body.authorizedsale,
    AllowPoints: req.body.allowpoints, 
    ItemCost: req.body.itemcost,
    Merchant: req.body.merchant,
    Submerchant: req.body.submerchant,
    Barcode: req.body.barcode,
    LongDescription: req.body.longdescription,
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
    ShortDescription: req.body.shortdescription,
    UnitPrice: req.body.unitprice,
    SpecialPrice: req.body.lastname,
    OfferQuantity: req.body.offerquantity,
    ItemType: req.body.itemtype,
    Department: req.body.department,
    Wieghtable: req.body.weightable,
    PriceRequired: req.body.pricerequired,
    Inventory: req.body.inventory,
    AllowFoodStamps: req.body.allowfoodstamps, 
    QuantityAllowed: req.body.quantityallowed,
    QuantityRequired: req.body.quantityrequired,
    AuthorizedSale: req.body.authorizedsale,
    AllowPoints: req.body.allowpoints, 
    ItemCost: req.body.itemcost,
    Merchant: req.body.merchant,
    Submerchant: req.body.submerchant,
    Barcode: req.body.barcode,
    LongDescription: req.body.longdescription,
  };
  Item.findByIdAndUpdate(req.params.itemId, { updatedItem }, (err, item) => {
    if (err) {
      res.status(404).json({ error: `No item with id: ${req.params.itemId} found on DB`, code: 'IT105' });
    } else {
      res.staus(200).json({ item });
    }
  });
};

const itemRemoveById = (req, res) => {
  item.findByIdAndUpdate(req.params.itemId, { Status: 'deleted' }, (err, item) => {
    if (err) {
      res.status(404).json({ error: `No item with id: ${req.params.itemId} found on DB`, code: 'IT105' });
    } else {
      res.status(200).json(item.Status);
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
