// userモデルに関するコントローラー例

const db = require('../models');
const User = db.user;

// user新規作成のバリデーション
exports.create = (req, res) => {
  if (!req.body.firstName) {
    res.status(400).send({
      message: '苗字を入力してね',
    });
    return;
  } else if (!req.body.lastName) {
    res.status(400).send({
      message: '名前を入力してね',
    });
    return;
  } else if (!req.body.email) {
    res.status(400).send({
      message: '名前を入力してね',
    });
    return;
  }

  // validationを通過したらuserInfoオブジェクトに代入
  const userInfo = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
  };

  User.create(userInfo)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'ユーザーの新規作成ができませんでした',
      });
    });
};
