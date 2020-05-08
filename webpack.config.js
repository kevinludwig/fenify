const path = require('path'),
    {CleanWebpackPlugin} = require('clean-webpack-plugin'),
      TerserWebpackPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: process.env['NODE_ENV'] === 'production' ? 'production' : 'development',
    entry: './src/index.js',
    devtool: 'source-map',
    resolve: {
        mainFields: ['module', 'main'],
        modules: ['./src', './node_modules'],
        extensions: ['.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'fenify.js',
        library: 'fenify',
        globalObject: 'this',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    optimization: {
        minimizer: [
            new TerserWebpackPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            })
        ]
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
};

