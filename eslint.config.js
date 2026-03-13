import pluginUnicorn from "eslint-plugin-unicorn";

export default [
  {
    ignores: ["eiscp/**", "eslint.config.js"],
  },
  {
    plugins: { unicorn: pluginUnicorn },
    rules: {
      "unicorn/prefer-module": "off",
      "unicorn/no-new-array": "warn",
      "unicorn/no-array-for-each": "warn",
      "camelcase": "off",
      "no-mixed-spaces-and-tabs": "warn",
      "no-useless-escape": "warn",
      "indent": "off",
      "quotes": ["warn", "double"],
      "capitalized-comments": "off",
      "no-var": "warn",
      "prefer-destructuring": "off",
      "prefer-arrow-callback": "warn",
      "object-shorthand": "off",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
      "curly": ["error", "multi-or-nest", "consistent"],
      "no-use-before-define": ["error", { classes: false }],
    },
  },
];
