var express = require('express');
var router = express.Router();
const path = require('path');

const {login,processLogin,vistaBienvenido, cerrarSession} = require('../controllers/userController');
const loginVadation = require('../validations/loginVadation');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/login', login);
router.post('/login',loginVadation, processLogin);
router.get('/vistaBienvenido', vistaBienvenido);
router.get('/logout', cerrarSession);

module.exports = router;
