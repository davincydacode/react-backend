var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/users', function(req, res, next) {
 //res.send("Welcome to React_Express")
 res.json([
  {id:1,username:'Odewumi'},
  {id:2,username:'Temiloluwa'},
  {id:2,username:'Vincent'},
  {id:2,username:'Mololuwa'}
  
  
  ]); 
 
});


module.exports = router;
