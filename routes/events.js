const express = require('express');
const { addEvent } = require('../controllers/events');
const router = express.Router();

router.post('/newevent', addEvent);


module.exports = router;