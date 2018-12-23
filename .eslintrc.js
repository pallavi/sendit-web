module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'react'
  ],
  settings: {
    react: {
      version: '16'
    }
  },
  extends: [
    'plugin:react/recommended'
  ],
  rules: {
    'jsx-quotes': [2, 'prefer-single'],
    'react/react-in-jsx-scope': 0,
    'react/jsx-tag-spacing': [2, {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never'
    }]
  }
};
