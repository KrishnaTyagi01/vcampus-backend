const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;
const Event = require('./events');
const users = require('./users');
const Schema = mongoose.Schema;

const registrationsSchema = new Schema({
  event: {
    type: ObjectId,
    ref: Event
  }, 
  username: {
    type: String,
  },
   name: {
    type: String,
   
  },
  email: {
    type: String,
    sparse:true
  },
  phone: {
    type: String,
   
  },
  roll: {
    type: String,
   
  },
  year: {
    type: String
    
  },
  section: {
    type: String,
   
  },
  dept: {
    type: String,
   
  },
  otherDetails: [{
     type: Object
  }]
});

module.exports = mongoose.model("registrations", registrationsSchema);

