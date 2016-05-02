import runSequence from 'run-sequence';

export function task () {
    runSequence(
        'clean',
        'sass',
        'build-js',
        'html',
        'assets',
        'build-index');
}