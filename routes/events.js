const express = require('express');
const { addEvent, getAllEvents,deleteEvent  } = require('../controllers/events');
const router = express.Router();

router.post('/newevent', addEvent);
router.post('/deleteevent', deleteEvent);
router.get('/getevents', getAllEvents);


module.exports = router;