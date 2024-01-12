/** @type {import('tailwindcss').Config} */

module.exports = {
  content: {
      relative: true,
      files: [
        './_drafts/**/*.html',
        './_includes/**/*.html',
        './_layouts/**/*.html',
        './_posts/*.md',
        './*.md',
        './*.html',
        './assets/src/**/*.{html,js}',
        './pages/**/*.{html,js}',
        './components/**/*.{html,js}',
        './**/*.{html,js}',
  ],
  theme: {
    extend: {},
  },
  plugins: []
}
};
