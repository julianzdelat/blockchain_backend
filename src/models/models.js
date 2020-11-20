// For purpose of refactoring we need to create a model file for each schema
// lets put this for the 2 sprint
const mongoose = require('mongoose');

const { Schema } = mongoose;

const CustomerSchema = new Schema({
  ClientNumber: String,
  Name: {
    type: String,
    require: true,
  },
  LastName: {
    type: String,
    require: true,
  },
  Address: String,
  City: String,
  State: String,
  Zipcode: String,
  PhoneHome: String,
  MobilePhone: {
    type: String,
    require: true,
  },
  WorkPhone: String,
  Status: {
    type: String,
    enum: ['active', 'deleted'],
    default: 'active',
  },
  Birthdate: {
    type: String,
    require: true,
  },
  Sex: {
    type: String,
    enum: ['M', 'F'],
    require: true,
  },
  PointsEarned: {
    type: Number,
    require: true,
  },
});

const DepartmentSchema = new Schema({
  Name: {
    type: String,
    require: true,
  },
  Description: String,
  Status: {
    type: String,
    enum: ['active', 'deleted'],
    default: 'active',
  },
});

const DepartmentGroupSchema = new Schema({
  Name: String,
  Description: String,
  Department: DepartmentSchema,
  Status: {
    type: String,
    enum: ['active', 'deleted'],
    default: 'active',
  },
});

const PaymentTypeSchema = new Schema({
  Name: String,
  Description: String,
  Status: {
    type: String,
    enum: ['active', 'deleted'],
    default: 'active',
  },
});

const ItemTypeSchema = new Schema({
  Name: {
    type: String,
    require: true,
  },
  IsAgeNeeded: Boolean,
  Status: {
    type: String,
    enum: ['active', 'deleted'],
    default: 'active',
  },
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
  Status: {
    type: String,
    enum: ['active', 'deleted'],
    default: 'active',
  },
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
