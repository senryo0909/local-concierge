const { relative } = require('path');

module.exports = {
  '*.{js,ts}': paths => [eslint(paths), prettier(paths)],
  '*.{css,scss,sass,less}': paths => [stylelint(paths), prettier(paths)],
  '*.{json,yml,md}': paths => prettier(paths),
};

const staging = paths => paths.map(file => relative(process.cwd(), file)).join(' ');
const prettier = paths => `prettier ${staging(paths)} --check --write`;
const eslint = paths => `eslint ${staging(paths)} --format friendly --fix`;
const stylelint = paths => `stylelint ${staging(paths)} --fix`;
