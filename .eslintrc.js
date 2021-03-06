/**
 *
 */
module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:@typescript-eslint/recommended', // 使用@typescript-eslint/eslint-plugin的推荐规则
        // 'plugin:jest/recommended',
    ],
    plugins: [
        '@typescript-eslint',
        // 'jest',
    ],
    parserOptions: {
        project: './tsconfig.json',
    },
    env: {
        node: true,
        // mongo: true,
        // jest: true,
    },
    rules: {
        'eol-last': 'warn',
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
        '@typescript-eslint/indent': ['error', 4],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-require-imports': 'warn',
        '@typescript-eslint/no-var-requires': 'warn',
        '@typescript-eslint/member-ordering': 'off',
        '@typescript-eslint/consistent-type-assertions': 'off',
        '@typescript-eslint/no-param-reassign': 'off',
        '@typescript-eslint/no-empty-function': 'warn',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/ban-types': [
            'error',
            {
                types: {
                    Object: false,
                    Function: false,
                },
                extendDefaults: true,
            },
        ],
    },
};
