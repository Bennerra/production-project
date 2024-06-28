module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
    'plugin:i18next/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:storybook/recommended'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '**/src/**/*.test.{ts,tsx}'
      ],
      rules: {
        'i18next/no-literal-string': 'off'
      }
    }
  ],
  parserOptions: {
    project: './tsconfig.eslint.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname
  },
  plugins: [
    'react',
    'i18next',
    '@typescript-eslint'
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    'no-console': 1,
    '@typescript-eslint/no-unused-vars': 'warn',
    quotes: ['error', 'single'],
    semi: 'error',
    indent: ['error', 2],
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'react/jsx-filename-extension': [1, {
      extensions:
        ['.js', '.jsx', '.ts', '.tsx']
    }],
    '@typescript-eslint/strict-boolean-expressions': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'no-tabs': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/naming-convention': 'off',
    'i18next/no-literal-string': [1, { markupOnly: true }],
    'max-len': ['error', {
      ignoreComments: true,
      ignorePattern: '^\\data-testid*<'
    }],
    'n/handle-callback-err': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    'react/display-name': 'off',
    '@typescript-eslint/no-unsafe-return': 'warn',
    '@typescript-eslint/no-unsafe-argument': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'warn'
  },
  globals: {
    __IS__DEV__: true
  }
}
