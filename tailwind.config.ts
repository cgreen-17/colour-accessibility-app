import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"], // Use Inter globally
      },
      fontSize: {
        h1: "4rem", // 40px
        h2: "2rem", // 32px
        h3: "1.75rem", // 28px
        h4: "1.5rem", // 24px
        h5: "1.25rem", // 20px
        h6: "1.125rem", // 18px
        body: "1rem", // 16px
        small: "0.875rem", // 14px
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
