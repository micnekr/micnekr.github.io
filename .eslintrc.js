module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "plugin:nuxt/recommended",
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    "comma-dangle": [
      "error",
      {
        arrays: "always",
        objects: "always",
      },
    ],
    quotes: ["error", "double", { allowTemplateLiterals: true }]
  },
}
