var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
  //res.send('respond with a resource');
res.json([
{id:1,username:'odewumi'},


]);
});


module.exports = router;
