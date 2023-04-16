const express = require('express');
const path = require('path');

const router = express.Router();

const offerController = require('../controllers/offer');

router.get('/lending', (req, res, next)=>{
    res.send('<h1>lending page</h1>');
})

router.get('/borrowing', (req, res, next) => {
    res.send('<h2>This page is borrowing page</h2>');
})

router.get('/add-offer', offerController.getAddOffer);

router.post('/add-offer', offerController.postAddOffer);

router.get('/contract/:offerId', offerController.getContract);

router.get('/', offerController.getOffers);

module.exports = router;