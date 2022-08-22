# 静的解析ツールによるソースコード検証

## [Prettier](https://prettier.io/docs/en/index.html)

- ソースコードのフォーマット

## [ESLint](https://eslint.org/)

- スクリプトの静的コード解析

## [Stylelint](https://stylelint.io/)

- スタイルの静的コード解析

## [husky](https://github.com/typicode/husky)

- git commit 時に発生する Git フック「pre-commit」をハンドリングする
- 実行内容は `server/.husky/` を参照してください

## [lint-staged](https://github.com/okonet/lint-staged)

- Git のステージに上がっているファイルを対象に任意のコマンド（本プロジェクトでは Format と Lint）を実行する
  - Unit, Feature, e2e テストなどを導入している場合は、テストも実行できる
- 実行内容は `server/.lintstagedrc.js` を参照してください
