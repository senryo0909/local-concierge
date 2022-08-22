# 事前準備

## インストール必須

- [Node.js 18.7.0](https://nodejs.org/ja/)
- [npm 8.15.0](https://docs.npmjs.com/)
- [Docker](https://www.docker.com/)
- [docker-compose](https://docs.docker.com/compose/)

## エディタ（VSCode）設定

1. VSCode で <kbd>Cmd（Ctrl）</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> を押してコマンドパレットを表示
2. `Extensions: Show Recommended Extensions` と入力
3. ワークスペースで推奨している拡張機能を全てインストール

または

1. VSCode で <kbd>Cmd（Ctrl）</kbd> + <kbd>Shift</kbd> + <kbd>X</kbd> を押す
2. `@recommended ` と入力
3. ワークスペースで推奨している拡張機能を全てインストール

# 環境構築手順

1. husky のセットアップ

   > **Note**<br>
   > husky の公式では、npm スクリプトの prepare にてセットアップしているが、本プロジェクトは、コンテナ内で npm スクリプトを実行するので、.git がマウントされない。<br>
   > なので、下記コマンドをホストマシン上で実行しセットアップする。

   ```bash
   # serverディレクトリに移動
   $ cd your/project/root/server
   $ npm run husky
   ```

2. .env をコピーする

   ```bash
   $ cd ..
   $ cp .env.example .env
   ```

3. build する(docker-compose.yml ファイルのあるパスで実行)

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

4. 依存ライブラリのインストール

   > **Note**<br>
   > パッケージの追加,更新 をする場合は、`$ npm install` や `$ npm update` に置き換えて使用してください。

   ```bash
   # 現在のpackage-lock.jsonを元に依存パッケージをインストール
   $ npm ci
   ```

5. Express サーバーの起動

   ```bash
   $ npm start
   ```

6. 完了<br>
   http://localhost:3005/ にアクセスして、トップページが表示されることを確認してください。

# URL

| 環境  | 役割           | URL                    |
| ----- | -------------- | ---------------------- |
| local | web アプリ URL | http://localhost:3005/ |

# npm スクリプト

| コマンド      | 役割                                    |
| ------------- | --------------------------------------- |
| npm start     | 開発用 Express サーバーの起動           |
| npm run build | 本番用 dist ディレクトリを構築          |
| npm run lint  | js,scss ファイルのソースコード検査      |
| npm run fix   | js,scss ファイルのソースコード検査&修正 |

# 課題

- web サーバーの証明書やセキュリティーを強化できていない
- port 番号は各自の環境に合わせやすいように.env にまとめたい
- Makefile で構築コマンドを減らしたい。
