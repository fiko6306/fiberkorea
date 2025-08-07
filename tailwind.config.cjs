const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}",
    "./src/styles/tailwind.css", // 꼭 있어야 함
  ],
  theme: {
    extend: {
      fontFamily: {
        // 한글용 Noto Sans KR, 영문용 Montserrat 순서로 우선 적용
        sans: ["'Noto Sans KR'", "'Montserrat'", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        text: "var(--color-text)",
        background: "var(--color-background)",
        border: "var(--color-border)",
      },
    },
  },
  corePlugins: {
    fontSize: false,
  },
  plugins: [require("tailwindcss-fluid-type")],
};
