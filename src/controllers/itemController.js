const mongoose = require('mongoose');

const Schema = require('../models/models.js');

const Item = mongoose.model('item', Schema.ItemSchema);

const itemAddNew = (req, res) => {
  const item = new Item({
    ShortDescription: req.body.shortDescription,
    UnitPrice: req.body.unitPrice,
    SpecialPrice: req.body.specialPrice,
    OfferQuantity: req.body.offerQuantity,
    ItemTypeId: req.body.itemTypeId,
    DepartmentId: req.body.departmentId,
    Wieghtable: req.body.weightable,
    PriceRequired: req.body.priceRequired,
    Inventory: req.body.inventory,
    AllowFoodStamps: req.body.allowFoodstamps,
    QuantityAllowed: req.body.quantityAllowed,
    QuantityRequired: req.body.quantityrequired,
    AuthorizedSale: req.body.authorizedSale,
    AllowPoints: req.body.allowPoints,
    ItemCost: req.body.itemCost,
    Merchant: req.body.merchant,
    Submerchant: req.body.submerchant,
    Barcode: req.body.barcode,
    LongDescription: req.body.longDescription,
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
    ItemTypeId: req.body.itemtypeId,
    DepartmentId: req.body.departmentId,
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
