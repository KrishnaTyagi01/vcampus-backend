const express = require('express');
const { createNew, getAllCommunities } = require('../controllers/community');
const router = express.Router();

router.post('/createcommunity', createNew);
router.get('/getAllCommunities', getAllCommunities);


module.exports = router;