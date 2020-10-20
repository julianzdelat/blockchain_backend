const mongoose = require('mongoose');
const models = require('../models/models.js');
 
/* eslint-disable no-unused-vars */
const customerContollers = requiere('./customerControllers.js');
const Department = mongoose.model('department', models.DepartmentSchema);
const DepartmentGroup = mongoose.model('departmentgroup', models.DepartmentGroupSchema);
const PaymentType = mongoose.model('paymenttype', models.PaymentTypeSchema);
const ItemType = mongoose.model('itemtype', models.ItemTypeSchema);
const Item = mongoose.model('item', models.ItemSchema);
const Payment = mongoose.model('payment', models.PaymentSchema);
const Order = mongoose.model('order', models.OrderSchema);
