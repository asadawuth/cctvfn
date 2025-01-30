import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  // กำหนดไฟล์หรือโฟลเดอร์ที่ต้องการ ignore
  { ignores: ["dist", "node_modules"] },
  {
    // ระบุว่าต้องการใช้ไฟล์ .js และ .jsx
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser, // ใช้ global variables ของ browser
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true }, // เปิดใช้งาน JSX
        sourceType: "module", // ใช้ module system
      },
    },
    settings: {
      react: {
        version: "detect", // ให้ ESLint ตรวจหา React version อัตโนมัติ
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
    rules: {
      // กฎการเขียนโค้ดที่แนะนำ
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,

      // กฎเพิ่มเติมที่ปรับแต่งเอง
      "react/prop-types": "off", // ปิดการเช็ค prop-types
      "react/jsx-no-target-blank": "off", // ปิดการเตือน target="_blank"
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true }, // อนุญาตให้ใช้ constant export
      ],
      "no-console": "warn", // เตือนเมื่อมี console.log
      "no-unused-vars": ["warn", { vars: "all", args: "none" }], // เตือนเมื่อมีตัวแปรที่ไม่ได้ใช้งาน
      "react/jsx-key": "warn", // เตือนเมื่อไม่มี key ใน JSX list
      "react/react-in-jsx-scope": "off", // ปิดการเตือน React import (สำหรับ React 17+)
      "react-hooks/rules-of-hooks": "error", // บังคับใช้ rules ของ react-hooks
      "react-hooks/exhaustive-deps": "warn", // เตือน dependencies ที่ขาดใน useEffect
    },
  },
];
