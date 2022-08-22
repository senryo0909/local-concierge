module.exports = () => {
  // controllerのアクションを使うために呼び出し
  const user = require('../controllers/user.controller.js');
  // expressのrouter機能を利用
  var router = require('express').Router();

  // ユーザーの新規登録ページ取得リクエスト
  router.get('/user/create', user.create);
  // ユーザーの新規登録完了リクエスト
  router.post('/user/create', user.create);
};
