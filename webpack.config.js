const path = require('path');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        path.join(__dirname, 'src', 'index.js')
    ],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/, exclude: /node_modules/,
                loaders: [/*"react-hot-loader/webpack",*/
                    "babel-loader"
                ]
            }
        ]
    }
    /*module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loaders: ["react-hot-loader", "babel-loader"] }
        ]
    }*/
};