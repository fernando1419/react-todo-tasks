import js from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
   js.configs.recommended,
   tseslint.configs.recommended,
   pluginReact.configs.flat.recommended,
   {
      files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
      plugins: { js },
      extends: ["js/recommended"]
   },
   {
      files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
      languageOptions: {
         globals: globals.browser
      },
      rules: {
         "react/react-in-jsx-scope": "off",
      },
   },
]);
