import globals from "globals";
import js from "@eslint/js";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser, // Используем корректное объединение глобальных переменных
      },
    },
  },
  js.configs.recommended,
];
