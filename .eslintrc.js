module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:i18next/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "i18next"
    ],
    "rules": {
        "no-console": 1,
        "@typescript-eslint/no-unused-vars": "warn",
        "quotes": ["error", "single"],
        "semi": "error",
        "indent": ["error", 2],
        "no-multi-spaces": "error",
        "no-multiple-empty-lines": "error",
        "react/react-in-jsx-scope": "off",
        "react/jsx-uses-react": "off",
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
        "@typescript-eslint/strict-boolean-expressions": "warn",
        "@typescript-eslint/explicit-function-return-type": "off",
        "no-mixed-spaces-and-tabs": "off",
        "no-tabs": "off",
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "@typescript-eslint/naming-convention": "off",
        "i18next/no-literal-string": ["error", { markupOnly: true }]
    },
    globals: {
      "__IS__DEV__": true
    }
}
