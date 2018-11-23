const mongoose = require('mongoose');

const TemperatureSchema = mongoose.Schema({
    _id: String,
    Value: String,
    Timestamp: String
}, {
    timestamps: false
});

module.exports = mongoose.model('Temperature', TemperatureSchema);