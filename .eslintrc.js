module.exports = {
    root: true,
    extends: ['plugin:prettier/recommended'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier'],
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                '@typescript-eslint/no-shadow': ['error'],
                'no-shadow': 'off',
                'no-undef': 'off',
                'no-unused-vars': 'off',
                'prettier/prettier': 'error',
                'react-hooks/exhaustive-deps': 'off',
            },
        },
    ],
};
