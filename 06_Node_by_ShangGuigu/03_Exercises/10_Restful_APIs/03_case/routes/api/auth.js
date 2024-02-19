var express = require('express');
var router = express.Router();
const UserModel = require('../../models/UserModel')
const md5 = require('md5')
const jwt = require('jsonwebtoken')
const { secret } = require('../../config/config')

//登录验证
router.post('/login', function (req, res, next) {
    const { userName, pwd } = req.body
    UserModel.findOne({ userName: userName, pwd: md5(pwd) })
        .then((data) => {

            if (!data) {
                return res.json({
                    code: '2001',
                    msg: '用户名或密码错误',
                    data: null
                })
            }
            // token
            const token = jwt.sign({
                userName: data.userName,
                _id: data._id
            }, secret, {
                expiresIn: 60 * 60 * 24 * 7
            });


            res.json({
                code: '0000',
                msg: '登录成功',
                data: token
            })

        }).catch((err) => {

            console.error('登录失败:', err);
            res.status(500).send('登录失败~~');
        });

});

module.exports = router;
