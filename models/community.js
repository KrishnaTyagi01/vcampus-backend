const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const communiySchema = new Schema({
  communityName: {
    type: String,
    required: true,
    unique: true
  },
  purpose: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  }
});

module.exports = mongoose.model("Community", communiySchema);

