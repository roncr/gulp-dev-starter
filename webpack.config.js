var path    = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var root = 'dist'; // TODO: factor this out

module.exports = {
    devtool: 'source-map',
    entry: {},
    module: {
        preLoaders: [
            { test: /\.js/, exclude: [/node_modules/], loader: 'eslint' }
        ],
        loaders: [
            { test: /\.js$/, exclude: [/node_modules/], loaders: ['babel'] }
        ]
    },
    plugins: [
        // Injects bundles in your index.html instead of wiring all manually.
        // It also adds hash to all injected assets so we don't have problems
        // with cache purging during deployment.
        new HtmlWebpackPlugin({
            template: path.join(root, 'index.html'),
            inject: 'body', // inject all scripts into body
            hash: true
        }),

        // Automatically move all modules defined outside of application directory to vendor bundle.
        // If you are using more complicated project structure, consider to specify common chunks manually.
        new webpack.optimize.CommonsChunkPlugin({
            name: 'js/vendor', // factor this out, this will be created in a JS folder
            minChunks: function (module) {
                return module.resource && module.resource.indexOf(path.resolve(__dirname, root)) === -1;
            }
        })
    ]
};