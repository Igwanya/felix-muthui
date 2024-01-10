const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: './assets/src/main.js',
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'assets/js'),
    },
    module: {
      rules: [
        {
         test: /\.css$/i,
         exclude: /node_modules/,
         include: path.resolve(__dirname, 'assets/src'),
         use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
      ],
    },
};
