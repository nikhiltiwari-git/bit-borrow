const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/login', (req, res, next)=>{
    res.send('<h1>login page</h1>');
})

router.get('/signin', (req, res, next) => {
    res.send('<h2>This page is registeration page</h2>');
})

module.exports = router;