var express = require('express');
var router = express.Router();
var User = require(__dirname + '/../models/users.js');
var bcrypt = require('bcryptjs');

/* GET users listing. */
router.get('/new', function(req, res, next) {
  res.render('users/new', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  var user = new User({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password)
  });
  user.saveAll();
  res.redirect('/');
});

module.exports = router;
