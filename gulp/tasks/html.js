import gulp from 'gulp';
import config from '../config';

export function task() {
    var src = config.htmlFiles;
    
    gulp.src(src)
        .pipe(gulp.dest(config.htmlOutputDir));
    
    return gulp
}