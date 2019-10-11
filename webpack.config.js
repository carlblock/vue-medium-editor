const webpack = require('webpack')
const path = require('path')
const PRODUCTION = process.env.NODE_ENV === 'production'
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    entry: './index',
    output: {
        filename: `vueMediumEditor${ PRODUCTION ? '.min' : '' }.js`,
        path: path.resolve(__dirname, 'dist'),
        library: 'vueMediumEditor',
        libraryTarget: 'umd'
    },
    optimization: {
        minimize: (PRODUCTION),
        minimizer: [new TerserPlugin({extractComments: false})]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};
