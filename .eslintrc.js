module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:compat/recommended',
  ],
  settings: {
    // List of polyfills for `eslint-plugin-compat` check
    // To know how to add in case you have a new one to add, please check
    // https://github.com/amilajack/eslint-plugin-compat/wiki/Adding-polyfills-(v2)
    polyfills: ['Promise.resolve'],
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: './tsconfig.eslint.json',
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-non-null-assertion': 1,
  },
};
