const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: './assets/src/main.js',
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'assets/dist'),
    },
    module: {
      rules: [
        {
         test: /\.css$/i,
         exclude: /node_modules/,
         include: path.resolve(__dirname, 'assets/src'),
         use: [
            'style-loader',
            'css-loader',
             {
                 loader: 'postcss-loader',
                 options: {
                     postcssOptions: {
                         plugins: [
                             [
                                 'postcss-preset-env'
                             ],

                         ],
                     },
                 },
             },
         ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'assets/resource',
          include: path.resolve(__dirname, 'assets/src'),
          loader: 'url-loader',
        },
      ],
    },
};
