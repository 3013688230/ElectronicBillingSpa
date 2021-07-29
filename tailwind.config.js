console.log('TAILWIND_MODE -->', process.env.TAILWIND_MODE);
const { guessProductionMode } = require("@ngneat/tailwind");

module.exports = {
    //mode: 'aot',
    prefix: '',
    purge: {
      enabled: guessProductionMode(),
      content: [
        './src/**/*.{html,ts}',
      ]
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
};
