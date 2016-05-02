import gulp from 'gulp';
import babel from 'gulp-babel';
import eslint from 'gulp-eslint';
import concat from 'gulp-concat';
import insert from 'gulp-insert';
import uglify from 'gulp-uglify';
import util from 'gulp-util';

import config from '../config';

export function task() {
    var src = config.jsFiles;

    return gulp.src(src)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
        .pipe(babel())
        .pipe(config.isProd ? concat(config.jsOutputFile) : util.noop())
        .pipe(config.isProd ? uglify() : util.noop())
        .pipe(config.isProd ? insert.prepend(config.banner) : util.noop())
        .pipe(gulp.dest(config.jsOutputDir));
}