import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
    globalIgnores(['dist', 'playwright.config.ts']),
    {
        files: ['src/**/*.{ts,tsx}'],
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactHooks.configs.flat.recommended,
            reactRefresh.configs.vite,

            tseslint.configs.recommendedTypeChecked,
            // tseslint.configs.strictTypeChecked,
            // tseslint.configs.stylisticTypeChecked,
        ],
        languageOptions: {
            globals: globals.browser,
            parserOptions: {
                project: ['./tsconfig.node.json', './tsconfig.app.json'],
                tsconfigRootDir: import.meta.dirname,
            },
        },

        rules: {
            "@typescript-eslint/no-unsafe-assignment": 0,
            "@typescript-eslint/no-unsafe-return": 0,
            "@typescript-eslint/no-floating-promises": 0,
            "@typescript-eslint/no-confusing-void-expression": 0,

            "react-hooks/exhaustive-deps": 0,
            "react-hooks/refs": 0,
        }
    },
])
