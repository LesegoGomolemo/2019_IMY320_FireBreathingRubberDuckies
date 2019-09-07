var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Fire Breathing Rubber Duckies' });
});

/* GET game page. */
router.get('/game', function(req, res, next) {
  res.render('game', { title: 'Coolest Game Ever' , quote: 'We could all be reading a book right now, but lets play a few more rounds.'});
});

/* GET project X. */
router.get('/projectX', function(req, res, next) {
  res.render('projectX', { title: 'Project X' , quote: 'This project will be revealed after the raid on Area 51.'});
});

/* GET horror short page. */
router.get('/horror', function(req, res, next) {
  res.render('horrorShort', { title: 'No Strings Attached' , quote: 'Horror short written and directed by the Fire Breathing Rubber Duckies'});
});

/* GET botic project page. */
router.get('/botic', function(req, res, next) {
  res.render('botic', { title: 'Botic: Privacy aware chatbot' , quote: 'Botic Privacy Chatbot, by Alabama Liquid Snakes for EPI USE Labs'});
});

/* GET ERP Ranger Mobile App project page. */
router.get('/erp', function(req, res, next) {
  res.render('erpRanger', { title: 'ERP Ranger Mobile Application' , quote: 'ERP Mobile Application project by Tenacious Technicians for EPI Use.'});
});


module.exports = router;
