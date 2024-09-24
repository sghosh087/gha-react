
const common = require('./webpack.common');
const path = require('path');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist'),
        clean: true
    },
    devServer: {
        devMiddleware: {
            writeToDisk: true
        },
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 8000,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.(css)$/,
                exclude: /\.(module.css)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.(css)$/,
                include: /\.(module.css)$/,
                use: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        modules: true
                    }
                }, 'postcss-loader']
            },
            {
                test: /\.(scss|sass)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            }
        ]
    }
})