/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
            'xs':'250px',
            'sm': '380px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1270px',
            '2xl' : '1536px'},
       
   extend: {
     colors:{
       'primary': '#3b82f6',
       'primaryhover': '#3b83f6e8',

     },
     borderRadius:{
      'radiusmd':'8px',
      'radiusbtn':'6px'
     }

   },
  
 },
  plugins: [],
}
