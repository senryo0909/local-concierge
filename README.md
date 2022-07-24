
## 構築手順

#### 1. buildする(docker-compose.ymlファイルのあるパスで実行)

```
$ docker-compose up --build -d
```

#### 2. npm packagesをインストール
```
$ docker-compose exec server sh "npm install"
```

#### 3. ビルド
```
$ docker-compose exec server sh "npm run dev"
```

###課題
- ローカルのnpmのバージョンに依存するため、できれば統一したいが、package.lock.jsonがあれば大丈夫？
- webサーバーの証明書やセキュリティーを強化できていない
- port番号は各自の環境に合わせやすいように.envにまとめたい
- nodemon使わずともホットリロードできる方法は時間なくてまだ調べきれていない
- 