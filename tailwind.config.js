/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        synthwave: {
          "primary": "oklch(28% 0.091 267.935)",
          "primary-content": "oklch(98% 0.003 247.858)",
          "secondary": "oklch(37% 0.146 265.522)",
          "secondary-content": "oklch(98% 0.003 247.858)",
          "accent": "oklch(48% 0.243 264.376)",
          "accent-content": "oklch(98% 0.003 247.858)",
          "neutral": "oklch(28% 0.091 267.935)",
          "neutral-content": "oklch(98% 0.001 106.423)",
          "base-100": "oklch(98% 0.001 106.423)",
          "base-200": "oklch(97% 0.001 106.424)",
          "base-300": "oklch(92% 0.003 48.717)",
          "base-content": "oklch(21% 0.006 56.043)",
          "info": "oklch(60% 0.126 221.723)",
          "info-content": "oklch(98% 0.019 200.873)",
          "success": "oklch(62% 0.194 149.214)",
          "success-content": "oklch(98% 0.018 155.826)",
          "warning": "oklch(68% 0.162 75.834)",
          "warning-content": "oklch(98% 0.026 102.212)",
          "error": "oklch(58% 0.253 17.585)",
          "error-content": "oklch(96% 0.015 12.422)",
        },
      },
    ],
    defaultTheme: "synthwave",
    base: true,
    styled: true,
    utils: true,
  },
};
