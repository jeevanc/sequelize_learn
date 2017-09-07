var express = require('express');
var router = express.Router();
var models = require('../models');

//create data

// var user = models.user.build({
//   fname:"nirab",
//   lname:"pudasaini",
//   address: "samkhusi"
// })

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

// var skill = models.skill.build({
//   title: "React",
//   user_id: 4
// })

// skill.save().then(function(newSkill){
//   console.log(newSkill);
// })

/* GET home page. */
router.get('/', function(req, res, next) {
  models.user.findAll().then(function(users) {
    res.render('index', {user: users})
  })
});


router.get('/users/delete/:id',function (req,res,next) {
  models.user.destroy({
    where:{
      id: req.params.id
    }
  })
  res.redirect(303,'/')
  /* By default Express uses HTTP code 302 for the redirect.
   According to the HTTP specification, this prevents POST/PUT
   requests from being redirected as POST/PUT requests and explains
   what you observed in your code */

  /*
  On the other hand, if you use a 303 redirect, the POST/PUT request
  is allowed to be redirected as a POST/PUT request
  */
})



router.get('/users/edit/:id',function (req,res,next) {
  models.user.findById("${id}").then(function(users) {
    res.render('edit', {user: users})
  })
})

module.exports = router;
