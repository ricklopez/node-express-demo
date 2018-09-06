const router = require('express').Router();
const path = require('path');



router.use(function(req, res, next){
  console.log("RUNNAUTH:", req.headers);
 
  next();
});

router.get('/', function(req, res) {
  res.json('Hello Api V1');
});

module.exports = router;