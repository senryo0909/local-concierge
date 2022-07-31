// node_moduleからexpressを使う宣言
const express = require("express");
const cors = require("cors");

const app = express();
const corsOptions = {
  origin: "http://server:3005"
};
const PORT = 3005;

// use middleware
app.use(cors(corsOptions));
app.use(express.json())

// モデル全体を呼び出す
const db = require("../models");
// dbの接続開始
db.sequelize.sync();

// 一旦ユーザールートだけを呼び出す(dbのようにroutes/index.jsを書けば個別でなくて済む)
require("../routes/user.routes.js")(app);

// first connection from client
app.listen(PORT, () => {
  console.log(`Server is runngin on port ${PORT}`)
})