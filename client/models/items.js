const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: String
})

const Item = mongoose.model('myitems', itemSchema);

module.exports = Item;