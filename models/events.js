const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;
const users = require('../models/users');

const EventSchema = new mongoose.Schema({
    eventName:{
        type: String,
        required: true
    },
    createdBy: {
        type: String, 
        required: true
    },
    college: {
        type: String,
    },
    lastRegistrationDate:{
        type: Date,
        required: true
    },
    eventDetails: {
        type: String,
    },
    namereq: {
        type: Boolean
    },
    phonereq: {
        type: Boolean
    },
    rollnoreq: {
        type: Boolean
    },
    emailreq: {
        type: Boolean
    },
    yearreq: {
        type: Boolean
    },
    sectionreq: {
        type: Boolean
    },
    deptreq: {
        type: Boolean
    },
    otherDetails: [
        {
            type: String,
            default:''
        }
    ],
    registrations: [{
        type: ObjectId,
        ref: users,
        default: ""
    }]
}, {timestamps: true})

module.exports = mongoose.model("Event", EventSchema);