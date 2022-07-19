var express = require('express');
var lotteryHelper = require('./lotteryHelper');
var router = express.Router();

lotteryHelper.generate();

/* GET home page. */
router.get('/', function(req, res, next) {
    let str = "";
    let obj = new Object();
    for(item in req.query) {
        str = req.query[item];
        obj[item] = JSON.parse(str);
    }
    res.send(JSON.stringify(obj));
});

module.exports = router;
