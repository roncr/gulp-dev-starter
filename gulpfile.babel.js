'use strict';

import gulp from 'gulp';
import fs from 'fs';

/*
 * Tasks:
 *    build
 *      - clean
 *      - sass
 *      - build-js
 *      - html
 *      - assets
 *          - images
 *      - serve
 *
 */

// Read in all files from gulp/tasks and create tasks for them
fs.readdirSync('./gulp/tasks')
    .filter((filename) => {
        return filename.match(/\.js$/i);
    })
    .map((filename) => {
        return {
            name: filename.substr(0, filename.length - 3),
            contents: require('./gulp/tasks/' + filename)
        };
    })
    .forEach(function (file) {
        gulp.task(file.name, file.contents.dependencies, file.contents.task);
    });