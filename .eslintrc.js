module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    // Recommended ts/es-lint rules
    'plugin:@typescript-eslint/recommended',
    // Disable ESLint rules conflicting with Prettier\
    'prettier',
  ],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
  },
  ignorePatterns: ['.eslintrc.js'],
};
