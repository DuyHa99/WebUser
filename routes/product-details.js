var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('product-details', { title: 'Product Details' });
});

module.exports = router;
