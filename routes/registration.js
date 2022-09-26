const express = require('express');
const {  register, getAllRegistrations } = require('../controllers/registration');
const router = express.Router();

router.post('/register', register);
router.get('/getallregistrations', getAllRegistrations);



module.exports = router;