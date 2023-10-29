const mongoose = require('mongoose');
const dataSchema = new mongoose.Schema({});
const data = mongoose.model('datas', dataSchema);
module.exports = data;