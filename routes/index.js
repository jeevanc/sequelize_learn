var express = require('express');
var router = express.Router();
var models = require('../models');

//create data

var user = models.user.build({
  fname:"saurav",
  lname:"bhattrai",
  address: "kll"
})

/*
****** saving ******/
// user.save().then(function(newUser){
//   console.log(newUser);
// })


/*
****** lsitng any one ******/
// models.user.findOne().then(function(user){
//   console.log(user);
// })


/*
****** listing by using where ******/

// models.user.findOne({
//   where:{
//     id:1
//   }
// }).then(function(user){
//   console.log(user);
// })



/*
****** finding by id ******/

// models.user.findById(1).then(function(user){
//   console.log(user);
// })


/*
****** finding all ******/
// models.user.findAll().then(function(user){
//   console.log(user);
// })




/*
****** deleting ******/
// models.user.destroy({
//   where:{
//     id:3
//   }
// }).then(function(user){
//   console.log(user);
// })









/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'seqelize' });
});

module.exports = router;
