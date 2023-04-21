const express = require('express');

const router = express.Router();

const contractController = require('../controllers/contract');

router.post('/active', contractController.postActiveContract);


module.exports = router;