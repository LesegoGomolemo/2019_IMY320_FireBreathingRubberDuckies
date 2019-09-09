var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Fire Breathing Rubber Duckies',
                        showHome: 'style= visibility:hidden',
                        firstWordTitle: 'Fire',
                        restOfTitle: ' Breathing Rubber Duckies',
                        pageDescription: '"We could all be reading a book right now, but lets watch these rubber duckies spit fire."',
                        leftPage: 'Our Game',
                        leftAddress: '/game',
                        thisHeading: 'About Us',
                        downAddress: '#team',
                        rightPage: 'Our Projects',
                        rightAddress: '/projects'});
});

/* GET game page. */
router.get('/game', function(req, res, next) {
  res.render('game', { title: 'Our Game',
                        showHome: '',
                        firstWordTitle: 'Our',
                        restOfTitle: ' Game',
                        pageDescription: 'Our non-existant video game :)',
                        leftPage: 'Short Horror Movie',
                        leftAddress: '/horrorShort',
                        thisHeading: 'About the game',
                        downAddress: '#theGame',
                        rightPage: 'About Us',
                        rightAddress: '/'});
});
/* GET project X. */
router.get('/projectX', function(req, res, next) {
  res.render('projectX', { title: 'Project X' , quote: 'This project will be revealed after the raid on Area 51.'});
});

/* GET horror short page. */
router.get('/horrorShort', function(req, res, next) {
  res.render('horrorShort', { title: 'Our Projects',
                              showHome: '',
                              firstWordTitle: 'No',
                              restOfTitle: ' Strings Attached',
                              pageDescription: 'Just when you thought puppets werent living',
                              leftPage: 'Our Projects',
                              leftAddress: '/projects',
                              thisHeading: 'About the movie',
                              downAddress: '#movie',
                              rightPage: 'Our Game',
                              rightAddress: '/game'});
});

/* GET botic project page. */
router.get('/projects', function(req, res, next) {
  // res.render('botic', { title: 'Botic: Privacy aware chatbot' , quote: 'Botic Privacy Chatbot, by Alabama Liquid Snakes for EPI USE Labs'});
  res.render('projects', { title: 'Our Projects',
                        showHome: '',
                        firstWordTitle: 'Our',
                        restOfTitle: ' Projects',
                        pageDescription: 'Our web development projects',
                        leftPage: 'About Us',
                        leftAddress: '/',
                        thisHeading: 'Our Projects',
                        downAddress: '#scroll-to',
                        rightPage: 'Short Horror Movie',
                        rightAddress: '/horrorShort'});
});

/* GET ERP Ranger Mobile App project page. */
router.get('/erp', function(req, res, next) {
  res.render('erpRanger', { title: 'ERP Ranger Mobile Application' , quote: 'ERP Mobile Application project by Tenacious Technicians for EPI Use.'});
});


module.exports = router;
