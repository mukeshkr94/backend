const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({});
const user = mongoose.model('users', userSchema);
module.exports = user;