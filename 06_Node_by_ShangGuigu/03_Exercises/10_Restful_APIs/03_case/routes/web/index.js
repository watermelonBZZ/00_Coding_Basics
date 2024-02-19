const express = require('express');
const AccountModel = require('../../models/AccountModel')
const checkLogin = require('../../middleWare/checkLogin')
const moment = require('moment')

const router = express.Router();

router.get('/', (req, res) => {
  res.redirect('/account')
})

//记账本的列表
router.get('/account', checkLogin, function (req, res, next) {
  //获取所有的账单信息
  AccountModel.find().sort({ time: -1 }).exec()
    .then((item) => {
      res.render('list', { accounts: item, moment: moment })
    })
});

//添加记录
router.get('/account/create', checkLogin, function (req, res, next) {
  res.render('create');
});

//新增记录
router.post('/account', checkLogin, (req, res) => {
  //生成 id
  AccountModel.create(req.body)
    .then((data) => {
      res.render('success', { msg: '添加成功哦~~~', url: '/account' })
    }).catch((err) => {

      console.error('插入失败:', err);
      res.status(500).send('插入失败~~');
    });
});

//删除记录
router.get('/account/:id', checkLogin, (req, res) => {
  //获取 params 的 id 参数
  let id = req.params.id;
  AccountModel.deleteOne({ _id: id })
    .then((data) => {
      res.render('success', { msg: '删除成功哦~~~', url: '/account' })
    }).catch((err) => {

      console.error('删除失败:', err);
      res.status(500).send('删除失败~~');
    });
});

router.post('/logout', (req, res) => {
  req.session.destroy()
  return res.redirect('/login')
})

module.exports = router;
