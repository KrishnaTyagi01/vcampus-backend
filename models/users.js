const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
  },
  college: {
    type: String,
    default: "none",
  },
  phone: {
    type: String
  },
  collegeId: {
    type: ObjectId,
    default: null,
  },
  emailVerified: {
    type: String,
    default: null
  },
  roll: {
    type: String
  }
});

module.exports = mongoose.model("users", userSchema);

