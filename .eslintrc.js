module.exports = {
  root: true,
  env: {
    // 运行的环境
    browser: true, // 浏览器
    es2021: true, // es
    node: true,
  },
  extends: [
    // 继承一些现有的配置
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],
  parserOptions: {
    ecmaVersion: 2021,
  },
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "prettier/prettier": ["error", { endOfLine: "auto" }], // 如果eslint和prettier有冲突，我们以prettier为主，让给你prettier覆盖eslint
  },
};
