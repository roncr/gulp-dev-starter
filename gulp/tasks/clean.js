import util from 'gulp-util';
import chalk from 'chalk';
import rimraf from 'rimraf';

import config from '../config';

export function task(done) {
    var path = config.outputDir;
    rimraf(path, e => {
        if (e) {
            util.log('Clean task failed with', e);
        } else {
            util.log('Deleted', chalk.yellow(path || '-'));
        }
        done();
    });
}