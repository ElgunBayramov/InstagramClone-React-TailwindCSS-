/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        loginbtn: "#0095f6",
        loginbtnhover: "#9360F7",
        facebook: "#385185",
        link: "#164878",
      },
      backgroundImage: {
        "logo-pattern":
          "url('https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones.png?__makehaste_cache_breaker=HOgRclNOosk')",
      },
    },
  },
  plugins: [],
};
