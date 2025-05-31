    const js = require('@eslint/js');

    module.exports = [
        {
            files: ['test/**/*.js'],
            languageOptions: {
                ecmaVersion: 2021,
                sourceType: 'commonjs'
            },
            rules : {
                ...js.configs.recommended.rules,
                semi: ['error', 'always'],
                quotes: ['error', 'single'],
            }
        }
    ];