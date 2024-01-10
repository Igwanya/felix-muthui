const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: './assets/build/main.js',
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'assets/js'),
    },
}
