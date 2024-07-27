import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';

export default [
    {
        languageOptions: {
            globals: {
                ...globals.browser,
            },
            parserOptions: {
                ecmaVersion: 12,
                sourceType: 'module',
            },
        },
        plugins: {
            js: pluginJs,
            react: pluginReact,
            prettier: pluginPrettier,
        },
        rules: {
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            'prettier/prettier': 'error',
            semi: ['error', 'always'],
            quotes: ['error', 'single'],
            indent: ['error', 4],
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
];
