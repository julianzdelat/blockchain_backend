const mongoose = require('mongoose');

const { Schema } = mongoose;

const CustomerSchema = new Schema({
  ClientNumber: String,
  Name: String,
  LastName: String,
  Address: String,
  City: String,
  State: String,
  Zipcode: String,
  PhoneHome: String,
  MobilePhone: String,
  WorkPhone: String,
  Status: {
    type: String,
    enum: ['active', 'deleted'],
    default: 'active',
  },
  Birthdate: Date,
  Sex: {
    type: String,
    enum: ['M', 'F'],
  },
  PointsEarned: Number,
});

const DepartmentSchema = new Schema({
  Name: String,
  Description: String,
});

const DepartmentGroupSchema = new Schema({
  Name: String,
  Description: String,
  Department: DepartmentSchema,
});

const PaymentTypeSchema = new Schema({
  Name: String,
  Description: String,
});

const ItemTypeSchema = new Schema({
  Type: String,
  AgeNeeded: Boolean,
});

const ItemSchema = new Schema({
  ShortDescription: String,
  UnitPrice: Number,
  SpecialPrice: Number,
  OfferQuantity: Number,
  ItemType: ItemTypeSchema,
  Department: DepartmentSchema,
  Weightable: Boolean,
  PriceRequired: Boolean,
  Inventory: Number,
  AllowFoodstamps: Boolean,
  QuantityAllowed: Number,
  QuantityRequired: Number,
  AuthorizedSale: Boolean,
  AllowPoints: Boolean,
  ItemCost: Number,
  Merchant: String,
  Submerchant: String,
  Barcode: Number,
  LongDescription: String,
});

const PaymentSchema = new Schema({
  PaymentNumber: Number,
  PaymentType: PaymentTypeSchema,
  Amount: Number,
  Status: {
    type: String,
    enum: ['completed', 'pending', 'canceled'],
    default: 'pending',
  },
});

const OrderSchema = new Schema({
  OrderNumber: Number,
  Date,
  CustomerId: Number,
  AwardPoints: Number,
  UsedPoints: Number,
  Status: {
    type: String,
    enum: ['completed', 'pending', 'active', 'canceled'],
    default: 'pending',
  },
  Items: [ItemSchema],
  Payments: [PaymentSchema],
  TotalItems: Number,
  TotalPayments: Number,
});

module.exports = {
  CustomerSchema,
  DepartmentSchema,
  DepartmentGroupSchema,
  PaymentTypeSchema,
  ItemTypeSchema,
  ItemSchema,
  PaymentSchema,
  OrderSchema,
};
