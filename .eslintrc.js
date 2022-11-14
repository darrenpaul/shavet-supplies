module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: "@babel/eslint-parser",
        requireConfigFile: false,
    },
    extends: [
        "plugin:vue/recommended",
        "eslint:recommended",
        "prettier",
        "plugin:prettier/recommended",
    ],
    plugins: [],
    ignorePatterns: ["dist", "node_modules"],
    rules: {
        "vue/multi-word-component-names": "off",
        "vue/component-definition-name-casing": "off",
        "no-unreachable": "warn",
        "no-unused-vars": "warn",
        "import/first": "off",
    },
};
