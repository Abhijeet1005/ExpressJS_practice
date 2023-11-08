var express = require('express');
var router = express.Router();
const userModel = require('./users');
const passport = require('passport');
const localStrategy = require('passport-local')
passport.use(new localStrategy(userModel.authenticate()));


router.get('/', function(req,res){
  
})
router.get('/profile', function(req,res){
  res.send('welcome to profile')
})

router.post('/register', function(req, res, next) {
  var userdata = new userModel({
    username: String,
    secret: String,
  });
  userModel.register(userdata,req.body.password)
  .then(function(registereduser){
    passport.authenticate("local")(req,res,function(){
      res.redirect('/profile')
    })
    })
});

router.post('/login',passport.authenticate("local",{
  successRedirect: '/profile',
  failureRedirect: '/login'
}),function(req,res){})


module.exports = router;









  // let userstore = await userModel.create({
  //   name: 'someName',
  //   nickname: 'someNickname',
  //   description: 'this is the description for the user named someName',
  //   tags: ['named','human','this is','something','ratio+l']
  // });


  // let regex = RegExp('^Asc$','i');
  // let something = await userModel.find({tags: {$all: ['database']}})

  // let = date1 = new Date('2023-11-07')
  // let = date2 = new Date('2023-11-08')
  // let something = await userModel.find({datecreated: {$gte: date1, $lte: date2}})

  // let something = await userModel.find({tags: {$exists: true}})

  // let something = await userModel.find({
  //   $expr: {
  //     $and: [
  //       {$gte: [{$strLenCP: '$nickname'},0]},
  //       {$lte: [{$strLenCP: '$nickname'},5]}
  //     ]
  //   }
  // })