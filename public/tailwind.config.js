/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.md',
    './*.html',
    './assets/src/**/*.{html,js}'
  ],
  theme: {
    extend: {},
  },
  plugins: []
}
