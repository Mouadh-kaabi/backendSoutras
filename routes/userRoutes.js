var express = require('express');
var router = express.Router();
var UserController = require('../controllers/UserController')

router.post('/signup', UserController.signup);

router.post('/login', UserController.login);
router.get('/getAllUser',UserController.show);

module.exports = router;