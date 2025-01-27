module.exports = {
    env: {
      node: true, // Для использования 'exports'
      jest: true, // Для использования 'test' и 'expect'
    },
    extends: [
      'eslint:recommended', // Базовые рекомендации ESLint
    ],
    parserOptions: {
      ecmaVersion: 2021, // Современные возможности JS
      sourceType: 'module', // Для использования ES-модулей (import/export)
    },
    rules: {
      // Ваши кастомные правила
    },
  };
  