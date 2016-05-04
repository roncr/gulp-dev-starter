import runSequence from 'run-sequence';
import config from '../config';

export function task () {
    config.isProd = true;

    runSequence(
        'clean',
        'sass',
        'html',
        'assets',
        'build-index',
        'serve-prod');
}