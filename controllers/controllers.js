const mongoose = require('mongoose');
const CustomerSchema = require('../models/models.js');
const DepartmentSchema = require('../models/models.js');
const DepartmentGroupSchema = require('../models/models.js');
const PaymentTypeSchema = require('../models/models.js');
const ItemTypeSchema = require('../models/models.js');
const ItemSchema = require('../models/models.js');
const PaymentSchema = require('../models/models.js');
const OrderSchema = require('../models/models.js');
const Customer = mongoose.model('customer', CustomerSchema);
const Department = mongoose.model('department', DepartmentSchema);
const DepartmentGroup = mongoose.model('departmentgroup', DepartmentGroupSchema);
const PaymentType = mongoose.model('paymenttype', PaymentTypeSchema);
const ItemType = mongoose.model('itemtype', ItemTypeSchema);
const Item = mongoose.model('item', ItemSchema);
const Payment = mongoose.model('payment', PaymentSchema);
const Order = mongoose.model('order', OrderSchema);

