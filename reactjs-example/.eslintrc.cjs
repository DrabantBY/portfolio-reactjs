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
  ],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
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

    // 'react/function-component-definition': 'off',
    // 'arrow-body-style': 'off',
    // 'import/no-named-as-default': 'off',
    // 'import/no-extraneous-dependencies': 'off',
    // 'operator-linebreak': 'off',
    // 'react/jsx-one-expression-per-line': 'off',
    // 'jsx-a11y/no-static-element-interactions': 'off',
    // 'jsx-a11y/label-has-associated-control': 'off',
    // '@typescript-eslint/comma-dangle': 'off',
  },
};
