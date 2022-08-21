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
1では、docker-compose.yml記載内容が上から同期的に処理され、コンテナが作成されます。
参考までに使用しているディレクティブの説明を記載します。
- services: # docker-composeは、コンテナをサービス単位で管理する、ここではそのサービスを定義する宣言をおこなっている
- nginx: # サービス名はこちらで自由に定義でき、webサーバーの役割を担うnginxをそのままサービス名として指定した。
- restart: always # コンテナが落ちた際に、dockerデーモンによりで再度upが自動で行われる
- build: #イメージを作成し、イメージからコンテナを作成する宣言
- context: . #Dockerfileを用いてイメージを作成する際に、そのpathをデーモンに教えるために起点となるパスを指定する。ここではdocker-compose.ymlがある階層を示す
- dockerfile: ./nginx/Dockerfile #イメージはdocker hubからダウンロードするか、Dockerfileで作成できることが可能、本件はDockerfileでオリジナルイメージを作成する上で、こDockerfileのパスを示す。
- image: nginx:web-server #Dockerfileから作成されるコンテナイメージの名前を命名。:の後は通常セマンティックのバージョンをつけることが慣例ではある
- depends_on: #コンテナの起動順序を示す。serverサービスのコンテナが先にないと、nginx/conf/default.confに記載してある通り、リバースプロキシで先にserverコンテナへ接続しに行くため、失敗する。それを避けるために、serverサービスのコンテナが立ち上がり次第、本nginxサービスの作成が走るようにしている。
- port: 8081:80 #左はホスト（PC）のポートを指定し、右は後述するコンテナネットワーク内でのコンテナのport番号を示す。コンテナ同士の通信は右側のportでやり取りを行う。
- volumes: - ./nginx/conf:/etc/nginx/conf.d　#ホストPC側のディレクトリ(左）とコンテナ内のディレクトリ（右）を同期させる。これでホストで編集したconf.d直下のファイルはホストでも自動で更新されその逆もまた然り。
- networks: - local-concierge # コンテナ同士（今回はvolume含め4コンテナ)同士のネットワーク名を指定する。これは全てのサービスに記載を行わないとネットワーク外となり、サービス名でのネットワーク先の指定ができなくなる。なくても良いが、ホストPCに異なるプロジェクトのコンテナが増えると管理がしにくくなる点で作成。

    コンテナ操作補足（docker-compose.ymlがある階層でコマンド実行をお願いします。
    
    ```bash
    
    # コンテナ停止(他のプロジェクトで使うportがバッティングしている時など)
    $ docker-compose stop

    # コンテナ再起動
    $ docker-compose restart

    # コンテナ・イメージのみ削除(dbのデータはボリュームコンテナで管理しており、それは消えないので安心)
    $ docker-compose down
    
    # コンテナ・ネットワーク・ボリューム・イメージ全削除（滅びの魔法・全て削除）
    $ docker-compose down --rmi all --volumes --remove-orphans

    ```

2. 完了<br>
    http://localhost:3005/ にアクセスして、トップページが表示されることを確認してください。


### DBの操作

- テーブルの作成
```bash
$ docker-compose exec server npx sequelize-cli model:generate --name テーブル名 --attributes カラム名:型,カラム名:型
```
# URL

|環境|役割|役割|
|---|---|---|
|local|webアプリURL|http://localhost:3005/|


# 課題
- webサーバーの証明書やセキュリティーを強化できていない
- port番号は各自の環境に合わせやすいように.envにまとめたい
- Makefileで構築コマンドを減らしたい。