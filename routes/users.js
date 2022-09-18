const express = require('express');
const { getUser, updateUser } = require('../controllers/users');
const router = express.Router();

router.get('/getuser', getUser);
router.post('/updateuser', updateUser);


module.exports = router;