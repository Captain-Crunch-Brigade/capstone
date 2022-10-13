module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'airbnb/hooks'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    quotes: ['error', 'single', 'avoid-escape'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
