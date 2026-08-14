/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        wb: {
          navy: "#12366b",
          blue: "#1769aa",
          green: "#36a64f",
          gold: "#e8a51b",
          ink: "#14213d",
          soft: "#f5f8fc"
        }
      },
      boxShadow: {
        soft: "0 20px 60px rgba(18,54,107,.10)"
      }
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        webbangla: {
          primary: "#12366b",
          secondary: "#36a64f",
          accent: "#e8a51b",
          neutral: "#14213d",
          "base-100": "#ffffff",
          "base-200": "#f5f8fc",
          "base-content": "#14213d"
        }
      }
    ]
  }
}
