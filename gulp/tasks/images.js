import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
//import pngquant from 'imagemin-pngquant';

import config from '../config';

export function task() {
    var src = config.imageFiles;
    
    return gulp.src(src)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [
                {removeViewBox: false},
                {cleanupIDs: false}
            ]/*,
            use: [pngquant()]*/
        }))
        .pipe(gulp.dest(config.imageOutputDir))
}