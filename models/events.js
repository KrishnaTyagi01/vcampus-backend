const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;

const EventSchema = new mongoose.Schema({
    eventName:{
        type: String,
        required: true
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
    ]
}, {timestamps: true})

module.exports = mongoose.model("Event", EventSchema);