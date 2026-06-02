import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class', // التفعيل عن طريق الكلاس
  content: [
    "./src/**/*.{html,ts,js}", // شمول كل ملفات المشروع
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config