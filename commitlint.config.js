// 提交注释检查文件
module.exports = {
  extends: ["@commitlint/config-conventional"], // 继承规范的配置
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feature",
        "update",
        "fixbug",
        "refactor",
        "optimize",
        "style",
        "docs",
        "chore",
      ],
    ],
    // "type-case": [0],
    // "type-empty": [0],
    // "scope-empty": [0],
    // "scope-case": [0],
    // "subject-full-stop": [0, "never"],
    // "subject-case": [0, "never"],
    // "header-max-length": [0, "always", 72],
  },
};