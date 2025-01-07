const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  lastLogin: { type: Date, default: Date.now },
  status: { type: String, enum: ['online', 'offline', 'away'], default: 'offline' },
}, { versionKey: false });  // Exclude the __v field

const User = mongoose.model('User', userSchema);


module.exports = User;
