const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  disease: { type: String, required: true },
  gender: { type: String, required: false },
  age: { type: Number, required: false },
  hospital: { type: String, required: false },
  visit_count: { type: Number, required: false },
  receivedAt: {type: Date, default: Date.now }
});

const DSSCount = mongoose.model('DSSCount', dataSchema);

module.exports = DSSCount;