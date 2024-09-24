
const common = require('./webpack.common');
const path = require('path');
const { merge } = require('webpack-merge');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: '[name].[contenthash:12].js',
        path: path.resolve(__dirname, '../dist'),
        clean: true
    },
    optimization: {
        minimizer: [
            `...`,
            new CssMinimizerWebpackPlugin()
        ]
    },
    module: {
        rules: [
            {
                test: /\.(css)$/,
                exclude: /\.(module.css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            },
            {
                test: /\.(css)$/,
                include: /\.(module.css)$/,
                use: [MiniCssExtractPlugin.loader, {
                    loader: 'css-loader',
                    options: {
                        modules: true
                    }
                },
                    'postcss-loader']
            },
            {
                test: /\.(scss|sass)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ]
})