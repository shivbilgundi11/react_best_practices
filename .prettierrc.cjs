/** @type {import("prettier").Options} */
const config = {
  bracketSpacing: true, // Add spaces inside brackets in object literals
  jsxSingleQuote: true, // Use single quotes in JSX
  plugins: ['prettier-plugin-tailwindcss'], // Enable Tailwind CSS plugin
  printWidth: 80, // Maximum line width
  quoteProps: 'consistent', // Use consistent quotes for object properties
  singleQuote: true, // Use single quotes for strings
  tabWidth: 2, // Number of spaces per indentation level
  trailingComma: 'all', // Use trailing commas wherever possible
};

module.exports = config;
