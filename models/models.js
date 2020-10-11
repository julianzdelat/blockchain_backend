const mongoose = require('mongoose');
const schema = mongoose.Schema;

let CustomerSchema = new schema({
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
        enum : ['active', 'deleted'],
        default: 'active'
    },  
    Birthdate: Date,
    Sex: {
        type: String,
        enum : ['M', 'F']
    },
    PointsEarned: Number  
})

let DepartmentSchema = new schema({
    Name : String,
    Description : String,
});

let DepartmentGroupSchema = new schema({
    Name : String,
    Description : String,
    Department : DepartmentSchema
})

let PaymentTypeSchema = new schema({
    Name : String,
    Description : String
});

let ItemTypeSchema = new schema({
    Type: String,
    AgeNeeded: Boolean
});

let ItemSchema = new schema({
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
    LongDescription: String
});

let PaymentSchema = new schema({
    PaymentNumber: Number,
    PaymentType: PaymentTypeSchema,
    Amount: Number,
    Status: {
        type: String,
        enum : ['completed', 'pending', 'canceled'],
        default: 'pending'
    }
});

let OrderSchema = new schema({
    OrderNumber: Number,
    Date: Date,
    CustomerId: Number,
    AwardPoints: Number,
    UsedPoints: Number,
    Status: {
        type: String,
        enum : ['completed', 'pending', 'active', 'canceled'],
        default: 'pending'
    },
    Items: [ItemSchema],
    Payments: [PaymentSchema],
    TotalItems: Number,
    TotalPayments: Number
});

module.exports = {
    CustomerSchema,
    DepartmentSchema,
    DepartmentGroupSchema,
    PaymentTypeSchema,
    ItemTypeSchema,
    ItemSchema,
    PaymentSchema,
    OrderSchema
}