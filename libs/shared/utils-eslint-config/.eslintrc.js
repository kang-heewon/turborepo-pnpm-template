module.exports = {
  root: true,
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx', '*.cjs', '*.mjs'],
      extends: ['plugin:@typescript-eslint/recommended', 'plugin:jsonc/recommended-with-json', 'turbo'],
      plugins: ['prettier', 'import', 'unused-imports'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
      },
      rules: {
        'prettier/prettier': [
          'error',
          {
            trailingComma: 'es5',
            singleQuote: true,
            printWidth: 120,
            arrowParens: 'avoid',
            endOfLine: 'auto',
          },
        ],
        'import/extensions': ['off'],
        'import/no-cycle': ['error'],
        'import/no-extraneous-dependencies': ['off'],
        'import/no-named-as-default': ['off'],
        'import/no-relative-packages': ['off'],
        'import/no-self-import': ['error'],
        'import/order': [
          'error',
          {
            groups: ['internal', 'external', 'builtin', 'parent', 'sibling'],
            pathGroups: [
              {
                pattern: '@*/**',
                group: 'internal',
                position: 'before',
              },
              {
                pattern: '@*/**',
                group: 'external',
                position: 'after',
              },
            ],
            pathGroupsExcludedImportTypes: [],
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
          },
        ],
        'import/prefer-default-export': ['off'],
        '@typescript-eslint/consistent-type-imports': [
          'error',
          {
            prefer: 'no-type-imports',
          },
        ],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'error',
        'turbo/no-undeclared-env-vars': ['warn'],
      },
    },
    {
      files: ['*.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/sort-keys': ['error'],
      },
    },
    {
      files: ['package.json'],
      parser: 'jsonc-eslint-parser',
      plugins: ['package-json'],
      rules: {
        'jsonc/sort-keys': 'off',
        'package-json/sort-collections': 'error',
      },
    },
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
  },
};
