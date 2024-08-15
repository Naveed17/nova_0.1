import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      mulish: "var(--font-mulish)",
    },

    container: {
      padding: "1rem",
      center: true,
      screens: {
        lg: "1170px",
        "2xl": "1400px",
      },
    },
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        // or whichever color you'd like
        html: { color: theme("colors.slate.800") },
      });
    }),
  ],
};
export default config;
