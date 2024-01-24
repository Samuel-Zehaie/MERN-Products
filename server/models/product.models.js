const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String
    },
    isImportant: {
        type: Boolean,
        default:false
    }
},{timestamps: true});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
