const express = require('express');

const router = express.Router();

router.get('/', (req, res, next)=>{
    res.render('offer/home');
})

router.get('/listings', (req, res, next) => {
    res.send('<h2>these are active listings</h2>');
})

module.exports = router;