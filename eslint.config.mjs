import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    // Configuramos cómo se deben tratar los archivos
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module", // Esto permite el 'import/export' en este archivo
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    rules: {
      "no-undef": "error",
      "no-unused-vars": "warn",
    },
  },
  {
    // Regla específica para tus archivos .js de Node (CommonJS)
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
    },
  }
];