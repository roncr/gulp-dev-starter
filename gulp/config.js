var args = require('minimist')(process.argv.slice(2));
var VERSION = args.version || require('../package.json').version;

export default {
    banner:
        '/*!\n' +
        ' * Gulp Dev Starter\n' +
        ' * https://github.com/roncr/gulp-dev-starter/\n' +
        ' * @license MIT\n' +
        ' * v' + VERSION + '\n' +
        ' */\n\n',
    isProd: args.prod,
    indexFile: 'src/index.html',
    htmlFiles: [
        'src/components/**/*.html'
    ],
    jsFiles: [
        'src/components/**/*.js',
        '!src/components/**/*.spec.js'
    ],
    scssFiles: [
        'src/style/**/*.scss',
        'src/components/**/*.scss'
    ],
    imageFiles: [
        'src/assets/images/*'
    ],
    assetFiles: [
        'src/assets/*',
        '!src/assets/images/*'
    ],
    outputDir: 'dist/',
    htmlOutputDir: 'dist/components/',
    jsOutputDir: 'dist/components/',
    cssOutputDir: 'dist/css/',
    imageOutputDir: 'dist/assets/images/',
    assetsOutputDir: 'dist/assets/',
    jsOutputFile: 'script.js',
    cssOutputFile: 'css/style.css',
    devServer: {
        port: 3005
    },
    tasks: {
        js: {
            entry: './src/components/app.js'
        }
    }
}