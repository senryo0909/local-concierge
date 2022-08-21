module.exports = {
  plugins: ['stylelint-scss'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
  ],
  rules: {
    indentation: 2,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
  },
};
