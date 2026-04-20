import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cores extraídas diretamente do seu Design System
        primary: "#000000",
        secondary: "#222222",
        tertiary: "#444444",
        neutral: "#FFFFFF",
        // Cores auxiliares observadas nos componentes (Background dos cards e erro)
        surface: "#E5E5E5", // O tom de cinza claro dos cards
        destructive: "#B91C1C", // O tom de vermelho do botão de lixeira
      },
      fontFamily: {
        // Mantendo as tipografias configuradas anteriormente
        sans: ["var(--font-manrope)", "sans-serif"],
        serif: ["var(--font-noto-serif)", "serif"], 
        label: ["var(--font-space-grotesk)", "sans-serif"], 
      },
      borderRadius: {
        // Os cards na imagem possuem cantos bem arredondados
        'layout': '24px',
        'component': '8px',
      }
    },
  },
  plugins: [],
};

export default config;