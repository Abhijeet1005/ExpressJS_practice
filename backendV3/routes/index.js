var express = require('express');
var router = express.Router();
const userModel = require('./users')

/* GET home page. */
router.get('/', async function(req, res) {
  res.render('index')
});




module.exports = router;
