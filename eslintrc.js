module.exports = {
  env: {
    node: true, // Для Node.js
    jest: true, // Для Jest (глобальные функции тестирования)
  },
  extends: ["eslint:recommended"], // Используемые правила
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  rules: {
  },
};
