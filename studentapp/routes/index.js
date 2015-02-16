var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  
    var db = req.db;
    var collection = db.get('student');
    collection.find({},{},function(e,docs){
	res.render('studentlist', {"studentlist":docs });
	});

});

module.exports = router;
