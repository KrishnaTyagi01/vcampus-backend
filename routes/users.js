const express = require('express');
const { getUser, updateUser, getAllUsers } = require('../controllers/users');
const router = express.Router();

router.get('/getuser/:emailId', getUser);
router.post('/updateuser', updateUser);
router.get('/getallusers', getAllUsers)


module.exports = router;