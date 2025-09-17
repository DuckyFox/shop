import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import { defineConfig } from "eslint/config";
import i18nextPlugin from "eslint-plugin-i18next";

export default defineConfig([
    {
        files: ["**/*.{ts,tsx}"],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                project: './tsconfig.json',
                ecmaVersion: "latest",
                sourceType: "module",
                ecmaFeatures: { jsx: true },
            },
            globals: globals.browser,
        },
        plugins: {
            js,
            react: pluginReact,
            "react-hooks": pluginReactHooks,
            i18next: i18nextPlugin,
        },
        settings: {
            react: {
                version: "detect", // автоматически возьмёт из package.json
            },
        },
        rules: {
            ...pluginReact.configs.flat.recommended.rules,
            ...pluginReactHooks.configs.recommended.rules,
            ...tseslint.configs.recommendedTypeChecked[0].rules,
            ...tseslint.configs.recommendedTypeChecked[1].rules,


            "indent": ["error", 4],                   // отступ: 4 пробела
            "semi": ["error", "always"],              // всегда использовать ;
            "quotes": ["error", "single"],            // одинарные кавычки
            "comma-dangle": ["error", "always-multiline"], // висячие запятые
            "object-curly-spacing": ["error", "always"],   // пробелы внутри {}
            "array-bracket-spacing": ["error", "never"],   // без пробелов внутри []
            "arrow-parens": ["error", "always"],
            "i18next/no-literal-string": 2,
            "react/react-in-jsx-scope": "off",
        },
    },
]);