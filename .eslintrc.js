module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 7,
        sourceType: 'module',
        allowImportExportEverywhere: false,
        ecmaFeatures: {
            jsx: true,
            modules: true
        }
    },
    env: {
        browser: false,
        es6: true,
        node: true,
    },
    extends: 'vue',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    rules: {
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'space-before-function-paren': 0,
        'comma-dangle': ["error", "always-multiline"],
        'semi': 0,
    },
    globals: {
        App: true,
        Page: true,
        wx: true,
        getApp: true,
        getPage: true
    }
};
