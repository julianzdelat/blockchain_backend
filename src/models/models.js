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

const ItemSchema = new Schema({
  Name: String,
  Description: String,
  UnitPrice: Number,
  Quantity: Number,
  Inventory: Number,
  IsAgeNeeded: Boolean,
  Barcode: Number,
  Status: {
    type: String,
    enum: ['active', 'deleted'],
    default: 'active',
  },
});

const PaymentSchema = new Schema({
  PaymentNumber: Number,
  PaymentTypeId: String,
  Amount: Number,
  Status: {
    type: String,
    enum: ['completed', 'pending', 'canceled'],
    default: 'pending',
  },
});

const OrderSchema = new Schema({
  OrderNumber: Number,
  Date: String,
  CustomerId: Number,
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
  PaymentTypeSchema,
  ItemSchema,
  PaymentSchema,
  OrderSchema,
};
