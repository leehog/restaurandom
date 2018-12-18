module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "extends": [
    "plugin:flowtype/recommended"
  ],
  "plugins": [
    "flowtype",
    "react",
    "import"
  ],
  "settings": {
    "flowtype": {
      "onlyFilesWithFlowAnnotation": false
    }
  },
  "rules": {
    "strict": 0,
    "no-fallthrough": 2,
    "no-eval": 2,
    "default-case": 2,
    "no-template-curly-in-string": 2,
    "no-sparse-arrays": 2,
    "brace-style": [2, "1tbs"],
    "block-spacing": [2, "always"],
    "global-require": 2,
    "no-unused-vars": 2,
    "comma-style": [2, "last"],
    "comma-dangle": [2, "never"],
    "camelcase": [2, { ignoreDestructuring: true }],
    "prefer-template": 2,
    "prefer-const": 2,
    "prefer-arrow-callback": 1,
    "no-var": 2,
    "no-useless-rename": 2,
    "no-useless-constructor": 2,
    "import/no-duplicates": 2,
    "no-const-assign": 2,
    "arrow-spacing": [2, { before: true, after: true }],
    "spaced-comment": [2, "always"],
    "semi": [2, "never"],
    "quotes": [2, "single"],
    "object-property-newline": [2, { "allowAllPropertiesOnSameLine": true }],
    "no-trailing-spaces": 2,
    "no-multiple-empty-lines": [2, { max: 1 }],
    "no-mixed-spaces-and-tabs": 2,
    "indent": [2, 2, { SwitchCase: 1 }],
    "implicit-arrow-linebreak": [2, "beside"],
    "react/jsx-uses-vars": 2
  }
};