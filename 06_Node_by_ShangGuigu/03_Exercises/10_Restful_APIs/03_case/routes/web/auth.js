var express = require('express');
var router = express.Router();
const UserModel = require('../../models/UserModel')
const md5 = require('md5')
// const session = require('express-session')
// const MongoStore = require('connect-mongo')

const moment = require('moment')


//用户注册页面
router.get('/reg', function (req, res, next) {
    res.render('reg')
});

// 新增注册用户
router.post('/reg', function (req, res, next) {
    UserModel.create({ ...req.body, pwd: md5(req.body.pwd) })
        .then((data) => {
            res.render('success', { msg: '添加成功哦~~~', url: '/login' })
        }).catch((err) => {

            console.error('插入失败:', err);
            res.status(500).send('插入失败~~');
        });

});

//登录界面
router.get('/login', function (req, res, next) {
    res.render('login')
});

//登录验证
router.post('/login', function (req, res, next) {
    const { userName, pwd } = req.body
    UserModel.findOne({ userName: userName, pwd: md5(pwd) })
        .then((data) => {

            if (!data) {
                res.send('账号或密码！')
            }
            // 把用户数据写入session
            req.session.userName = data.userName;
            req.session._id = data._id;

            res.render('success', { msg: '登录成功哦~~~', url: '/account' })

        }).catch((err) => {

            console.error('登录失败:', err);
            res.status(500).send('登录失败~~');
        });

});



module.exports = router;
