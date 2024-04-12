module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    // 注意你必须禁用基本规则，因为它可以报告不正确的错误
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["off"],

    //props验证的报错解决办法
    //原因是eslint在使用了"plugin:react/recommende"对react检查时，会使用prop-types规则进行检查，此时type缺少props验证
    "react/prop-types": "off",
  },
};
