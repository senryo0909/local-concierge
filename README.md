
## 構築手順

#### 1. buildする(docker-compose.ymlファイルのあるパスで実行)

```
$ docker-compose up --build -d
```

#### 補足
```
# コンテナ・ネットワーク・ボリューム・イメージ全削除
$ docker-compose down --rmi all

# コンテナ停止
$ docker-compose stop

```
###課題
- ローカルのnpmのバージョンに依存するため、できれば統一したいが、package.lock.jsonがあれば大丈夫？
- webサーバーの証明書やセキュリティーを強化できていない
- port番号は各自の環境に合わせやすいように.envにまとめたい
- nodemon使わずともホットリロードできる方法は時間なくてまだ調べきれていない
- Makefileで構築コマンドを減らしたい。