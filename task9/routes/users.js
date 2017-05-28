var express = require('express');
var router = express.Router();
var mysql = require('mysql');
// var $host = 'localhost';
// var $port = 3306;
// var $user = 'root';
// var $password = '';
// var $db = 'baidunews';
var db = require('./db.js');

var connection = mysql.createPool(db)

/* 后台路由页面 */


// 获取所有新闻列表
router.get('/getnews', function(req, res, next) {
    connection.query('SELECT * FROM news order by id desc', function(err, results) {
        res.json(results)
    })
});




// 点击确认更新
router.get('/update', function(req, res) {
    var newsid = req.query.id,
        newstype = req.query.newstype,
        newstitle = req.query.newstitle,
        newstime = req.query.newstime,
        newssrc = req.query.newssrc,
        newsimg = req.query.newsimg;
    console.log(req.query.id);
    connection.query('UPDATE news SET newstitle= ?, newssrc= ?, newstime= ?, newsimg= ?, newstype= ? WHERE id= ?', [newstitle, newssrc, newstime, newsimg, newstype, newsid], function(err, rows) {
        if (err) throw error;
        console.log(rows.changedRows);
        res.json(rows);
    });
});




//模态框取值
router.get('/curnews', function(req, res) {
    var $newsid = req.query.newsid;
    connection.query('SELECT * FROM news WHERE id= ?', [$newsid], function(err, rows) {
        console.log(rows);
        res.json(rows);
    })
})


//删除新闻条
router.post('/delete', function(req, res) {
    var newsid = req.body.newsid;
    console.log(newsid);
    connection.query('DELETE FROM news WHERE id = ?', [newsid], function(err, result) {
        console.log(result.affectedRows);
        res.json("删除");
    })
})

//插入
router.post('/insert', function(req, res) {
    var newstype = req.body.newstype,
        newstitle = req.body.newstitle,
        newstime = req.body.newstime,
        newssrc = req.body.newssrc,
        newsimg = req.body.newsimg;
    connection.query('INSERT INTO news(newstitle, newssrc, newstime, newsimg, newstype)VALUES(?, ?, ?, ?, ?)', [newstitle, newssrc, newstime, newsimg, newstype], function(err, result) {
        if (!err) {
            console.log(result.insertId);
            res.json(result);
        }
    })
})


// connection.end();
module.exports = router;