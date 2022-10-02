const express = require('express');
const { createNew, getAllCommunities, isUnique } = require('../controllers/community');
const router = express.Router();

router.post('/createcommunity', createNew);
router.get('/isunique/:comName', isUnique);
router.get('/getAllCommunities', getAllCommunities);


module.exports = router;