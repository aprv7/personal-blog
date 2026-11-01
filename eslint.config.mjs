import react from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,jsx}"],
    plugins: { react },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        document: "readonly",
        fetch: "readonly",
        localStorage: "readonly",
        window: "readonly",
      },
    },
    rules: {
      "no-unused-vars": "error",
      "react/jsx-uses-vars": "error",
    },
  },
  {
    ignores: [".next/**", "dist/**", "node_modules/**"],
  },
];
