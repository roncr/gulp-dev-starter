import util from 'gulp-util';
import webpack from 'webpack';
import colorsSupported from 'supports-color';

import config from '../config';

export function task(cb) {
    const webpackConfig = require('../../webpack.prod.config');
    webpackConfig.entry['js/app'] = config.tasks.js.entry;

    webpack(webpackConfig, (err, stats) => {
        if(err)  {
            throw new util.PluginError("webpack", err);
        }

        util.log("[webpack]", stats.toString({
            colors: colorsSupported,
            chunks: false,
            errorDetails: true
        }));

        cb();
    });
}