const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the sender
    recipientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the recipient
    content: { type: String, required: true }, // The message content
    timestamp: { type: Date, default: Date.now }, // Time when the message was sent
    isRead: { type: Boolean, default: false }, // Track whether the recipient has read the message
  });
  
  const Message = mongoose.model('Message', messageSchema);
  
  module.exports = Message;
  