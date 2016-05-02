import gulp from 'gulp';
import config from '../config';

export var dependencies = ['images']
export function task() {
    var src = config.assetFiles;

    gulp.src(src)
        .pipe(gulp.dest(config.assetsOutputDir))
}