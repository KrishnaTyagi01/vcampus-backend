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
  collegeId: {
    type: ObjectId,
    default: null,
  },
  emailVerified: {
    type: String,
    default: null
  }
});

module.exports = mongoose.model("users", userSchema);

