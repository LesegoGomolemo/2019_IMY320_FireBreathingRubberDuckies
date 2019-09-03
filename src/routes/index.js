var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Fire Breathing Rubber Duckies' });
});

/* GET game page. */
router.get('/game', function(req, res, next) {
  res.render('game', { title: 'Coolest Game Ever' });
});

/* GET project X. */
router.get('/projectX', function(req, res, next) {
  res.render('projectX', { title: 'Project X' });
});

/* GET horror short page. */
router.get('/horror', function(req, res, next) {
  res.render('horrorShort', { title: 'No Strings Attached' });
});

/* GET botic project page. */
router.get('/botic', function(req, res, next) {
  res.render('botic', { title: 'Botic: Privacy aware chatbot'});
});

/* GET ERP Ranger Mobile App project page. */
router.get('/erp', function(req, res, next) {
  res.render('erpRanger', { title: 'ERP Ranger Mobile Application' });
});


module.exports = router;
