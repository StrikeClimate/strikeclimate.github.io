import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		container: {
  			center: true,
  			padding: '1.2rem',
  			screens: {
  				'2xl': '1400px'
  			}
  		},
  		fontFamily: {
  			lexend: [
  				'var(--font-lexend)'
  			]
  		},
  		colors: {
  			primary: {
  				DEFAULT: '#00b188',
  				foreground: '#231f20'
  			},
  			secondary: {
  				DEFAULT: '#231f20',
  				foreground: '#fff'
  			},
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
