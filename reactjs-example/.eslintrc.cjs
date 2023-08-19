module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'prettier',
  ],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'jsx-quotes': ['warn', 'prefer-single'],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': [
      'warn',
      {
        namedComponents: 'arrow-function',
      },
    ],
    'arrow-body-style': ['warn', 'always'],
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,
        printWidth: 80,
        singleQuote: true,
        jsxSingleQuote: true,
        bracketSpacing: true,
        bracketSameLine: false,
        endOfLine: 'auto',
        trailingComma: 'es5',
      },
    ],
    'react/destructuring-assignment': ['warn', 'never'],
    'import/extensions': ['warn', 'never', { svg: 'always' }],
  },
};
