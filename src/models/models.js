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
  HomePhone: String,
  MobilePhone: {
    type: String,
    require: true,
  },
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
});

const PaymentTypeSchema = new Schema({
  Name: {
    type: String,
    require: true,
  },
  Description: String,
  Status: {
    type: String,
    enum: ['active', 'deleted'],
    default: 'active',
    require: true,
  },
});

const ItemSchema = new Schema({
  Name: String,
  Description: String,
  UnitPrice: {
    type: Number,
    require: true,
  },
  Quantity: Number,
  Inventory: Number,
  IsAgeNeeded: {
    type: Boolean,
    require: true,
  },
  Barcode: {
    type: Number,
    require: true,
  },
  Status: {
    type: String,
    enum: ['active', 'deleted'],
    default: 'active',
    require: true,
  },
});

const PaymentSchema = new Schema({
  PaymentNumber: Number,
  PaymentTypeId: {
    type: String,
    requiere: true,
  },
  Amount: {
    type: Number,
    require: true,
  },
  Status: {
    type: String,
    enum: ['completed', 'pending', 'canceled'],
    default: 'pending',
  },
});

const OrderSchema = new Schema({
  OrderNumber: {
    type: Number,
    require: true,
  },
  Date: {
    type: String,
    require: true,
  },
  CustomerId: {
    type: Number,
    require: true,
  },
  Status: {
    type: String,
    enum: ['completed', 'pending', 'active', 'canceled'],
    default: 'pending',
  },
  Items: {
    type: [ItemSchema],
    require: true,
  },
  Payments: {
    type: [PaymentSchema],
    require: true,
  },
  TotalItems: Number,
  TotalPayments: Number,
});

module.exports = {
  CustomerSchema,
  PaymentTypeSchema,
  ItemSchema,
  PaymentSchema,
  OrderSchema,
};
