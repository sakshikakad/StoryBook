const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../middleware/auth')

//@desc login/Landing page
//@route Get/
router.get('/', ensureGuest, function (req, res, next) {
    res.render('login', {
        layout: 'login',
    });
});

//@desc dashboard
//@route Get/dashboard
router.get('/dashboard', ensureAuth, (req, res) => {
    res.render('dashboard')
})
module.exports = router