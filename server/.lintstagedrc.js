const { relative } = require('path');

const EXEC_PREFIX = `docker exec -t concierge-app-server`;

/**
 * 引数 `paths` には、git add したファイルのパスが配列で入ってくる。
 * `paths` 配列の中にある、パス1つ1つに対して `server/` からの
 * 相対パスに変換し、スペース区切りの文字列にする。
 */
const staging = paths => paths.map(file => relative(process.cwd(), file)).join(' ');

/**
 * `staging()` で取得したファイル相対パスのスペース区切り文字列に対しての、
 * {`prettier` | `eslint` | `stylelint`}コマンドを作成する。
 */
const prettier = paths => `${EXEC_PREFIX} npx prettier ${staging(paths)} --check --write`;
const eslint = paths => `${EXEC_PREFIX} npx eslint ${staging(paths)} --format friendly --fix`;
const stylelint = paths => `${EXEC_PREFIX} npx stylelint ${staging(paths)} --fix`;

/**
 * 引数 `paths` には、git add したファイルの中で、拡張子のファイルパスが配列で入ってくる。
 * 引数 `paths` を `eslint()` `prettier()` `stylelint()` にそれぞれ渡すことで、対象コマンドを実行している。
 */
module.exports = {
  '*.{js,ts}': paths => [eslint(paths), prettier(paths)],
  '*.{css,scss,sass,less}': paths => [stylelint(paths), prettier(paths)],
  '*.{json,yml,md}': paths => prettier(paths),
};
