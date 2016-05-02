import gulp from 'gulp';
import sass from 'gulp-sass';
import util from 'gulp-util';
import insert from 'gulp-insert';
import concat from 'gulp-concat';
import minify from 'gulp-clean-css';
import sassLint from 'gulp-sass-lint';
import autoprefixer from 'gulp-autoprefixer';

import config from '../config';

export function task() {
    var src = config.scssFiles;

    return gulp.src(src)
        .pipe(sassLint())
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError())
        .pipe(concat(config.cssOutputFile))
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(insert.prepend(config.banner))
        .pipe(config.isProd ? minify() : util.noop())
        .pipe(gulp.dest(config.outputDir));
}