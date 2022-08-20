# 事前準備

- [Node.js 18.7.0](https://nodejs.org/ja/)
- [npm 8.15.0](https://docs.npmjs.com/)
- [Docker](https://www.docker.com/)
- [docker-compose](https://docs.docker.com/compose/)

# 環境構築手順

1. buildする(docker-compose.ymlファイルのあるパスで実行)
    ```bash
    $ docker-compose up --build -d
    ```

    補足
    ```bash
    # コンテナ・ネットワーク・ボリューム・イメージ全削除
    $ docker-compose down --rmi all --volumes --remove-orphans

    # コンテナ停止
    $ docker-compose stop
    ```

2. 依存ライブラリのインストール
    > **Note**<br>
    > パッケージの追加,更新 をする場合は、`$ npm install` や `$ npm update` に置き換えて使用してください。
    > 

    ```bash
    # 現在のpackage-lock.jsonを元に依存パッケージをインストール
    $ npm ci
    ```

3. Expressサーバーの起動
    ```bash
    $ npm start
    ```

4. 完了<br>
    http://localhost:3005/ にアクセスして、トップページが表示されることを確認してください。

# URL

|環境|役割|役割|
|---|---|---|
|local|webアプリURL|http://localhost:3005/|


# 課題
- webサーバーの証明書やセキュリティーを強化できていない
- port番号は各自の環境に合わせやすいように.envにまとめたい
- Makefileで構築コマンドを減らしたい。