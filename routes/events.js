const express = require('express');
const { addEvent, getAllEvents } = require('../controllers/events');
const router = express.Router();

router.post('/newevent', addEvent);
router.get('/getevents', getAllEvents);


module.exports = router;