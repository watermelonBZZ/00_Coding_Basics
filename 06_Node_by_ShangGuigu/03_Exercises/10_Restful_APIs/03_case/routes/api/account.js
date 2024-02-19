const express = require('express');
const router = express.Router();
const AccountModel = require('../../models/AccountModel')
const moment = require('moment');
const jwt = require('jsonwebtoken')
const checkTokenMiddleWare = require('../../middleWare/checkToken')


//记账本的列表
router.get('/account', checkTokenMiddleWare, function (req, res, next) {
    console.log(req.user)
    //获取所有的账单信息
    AccountModel.find().sort({ time: -1 }).exec()
        .then((item) => {
            res.json({
                code: "0000",
                msg: "读取成功",
                data: item

            })
        }).catch((err) => {
            res.json({
                code: "1001",
                msg: "读取失败",
                data: null
            })
        })
});

//新增记录
router.post('/account', checkTokenMiddleWare, (req, res) => {
    //生成 id
    AccountModel.create(req.body)
        .then((item) => {
            res.json({
                code: "0000",
                msg: "读取成功",
                data: item

            })
        }).catch((err) => {
            res.json({
                code: "1002",
                msg: "读取失败",
                data: null
            })
        });
});

//删除记录
router.delete('/account/:id', checkTokenMiddleWare, (req, res) => {
    //获取 params 的 id 参数
    let id = req.params.id;
    AccountModel.deleteOne({ _id: id })
        .then((item) => {
            res.json({
                code: "0000",
                msg: "删除成功",
                data: {}

            })
        }).catch((err) => {
            res.json({
                code: "1003",
                msg: "删除失败",
                data: null
            })
        });
});

// 获取单个账单信息
router.get('/account/:id', checkTokenMiddleWare, (req, res) => {
    //获取 params 的 id 参数
    let id = req.params.id;
    AccountModel.findById({ _id: id })
        .then((item) => {
            res.json({
                code: "0000",
                msg: "查询成功",
                data: item

            })
        }).catch((err) => {
            res.json({
                code: "1004",
                msg: "查询失败",
                data: null
            })
        });
})

// 更新账单
router.patch('/account/:id', checkTokenMiddleWare, (req, res) => {
    //生成 id
    const id = req.params.id
    AccountModel.updateOne({ _id: id }, req.body)
        .then(() => {
            AccountModel.findById({ _id: id })
                .then((item) => {
                    res.json({
                        code: "0000",
                        msg: "修改成功",
                        data: item
                    });
                })
                .catch((err) => {
                    res.json({
                        code: "1004",
                        msg: "读取失败",
                        data: null
                    });
                });
        })
        .catch((err) => {
            res.json({
                code: "1005",
                msg: "修改失败",
                data: null
            })
        });
})

module.exports = router;
