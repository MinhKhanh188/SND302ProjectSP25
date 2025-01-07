const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }],  // Users in the chat
    messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],  // Reference to messages in this chat
    lastMessageTimestamp: { type: Date, default: Date.now },  // Timestamp for the last message sent
  });
  
  const Chat = mongoose.model('Chat', chatSchema);
  
  module.exports = Chat;
  