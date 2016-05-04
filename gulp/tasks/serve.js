import gulp from 'gulp';
import browserSync from 'browser-sync';

import config from '../config';

var serve = browserSync.create();

export function task() {
    serve.init({
        port: config.devServer.port,
        server: {
            baseDir: config.outputDir
        }
    });
}