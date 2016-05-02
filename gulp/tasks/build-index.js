import gulp from 'gulp';
import inject from 'gulp-inject';

import config from '../config';

export function task() {
    var src = config.indexFile;

    var injectableSources = gulp.src([
        `${config.jsOutputDir}**/*.js`,
        `${config.cssOutputDir}**/*.css`
    ], {read: false});

    return gulp.src(src)
        .pipe(inject(injectableSources, {
            ignorePath: config.outputDir,
            addRootSlash: false
        }))
        .pipe(gulp.dest(config.outputDir));
}