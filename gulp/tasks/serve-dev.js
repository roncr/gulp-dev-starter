import webpack from 'webpack';
import browserSync from 'browser-sync';
import colorsSupported from 'supports-color';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import historyApiFallback from 'connect-history-api-fallback';

import config from '../config';

var serve = browserSync.create();

export function task() {
    const webpackConfig = require('../../webpack.dev.config');
    webpackConfig.entry.app = [
        // this modules required to make HRM working
        // it responsible for all this webpack magic
        'webpack-hot-middleware/client?reload=true',
        // application entry point
        config.tasks.js.entry
    ];

    var compiler = webpack(webpackConfig);

    serve.init({
        port: config.devServer.port,
        open: false,
        server: {
            baseDir: config.outputDir
        },
        middleware: [
            historyApiFallback(),
            webpackDevMiddleware(compiler, {
                stats: {
                    colors: colorsSupported,
                    chunks: false,
                    modules: false
                },
                publicPath: webpackConfig.output.publicPath
            }),
            webpackHotMiddleware(compiler)
        ]
    });
}