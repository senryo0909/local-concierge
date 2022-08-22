// db接続情報
const Sequelize = require('sequelize');
const dbConfig = require('../config/db.config.js');
// dbラッパーSequelize本体
// config/db.config.jsで記載したdb情報をインスタン生成してexpressで使えるようにする
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

// 初期化
const db = {};
// Sequelizeを利用した設定内容代入
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// db.モデル名とすることで、src/server.jsで呼び出すモデルをこのindex.jsだけで済ませるようにできる
db.user = require('./user.model.js')(sequelize, Sequelize);

// dbを公開する
module.exports = db;
