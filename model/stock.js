const mongoose = require('mongoose');
const stockSchema = new mongoose.Schema({
    name: {
        type: String,
        require:true
    },
    last: {
        type: Number,
        require:true
    },
    buy: {
        type: Number,
        require:true
    },
    sell: {
        type: Number,
        require:true
    },
    volume: {
        type: Number,
        require:true
    },
    base_unit: {
        type: String,
        require:true
    },
})

const stockModule = mongoose.model('stock', stockSchema);
module.exports = stockModule;