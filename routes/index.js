var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController')

/* GET users listing. */
router.get('/', indexController.home); // localhost:3000/

module.exports = router;
