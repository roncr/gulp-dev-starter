# Gulp dev Starter

Simple starter project for web development using Gulp.

## Get started

To start a brand new project, download the source code and go through this checklist:
* Change name, description and license in the `package.json` file.
* Change name and license of the banner in the `gulp/config.js` file.
* Change the SCSS lint rules in `.sass-lint.yml` file. Check [sass-lint](https://github.com/sasstools/sass-lint) for documentation.
* Change the ESLint rules in '.eslintrc' file. ESlint is pre-configured here to use the [standard style guide](https://github.com/feross/eslint-config-standard/blob/master/eslintrc.json)
* Go to `src/index.html` and change the title of the document.

## Tasks

Start dev build

    gulp build

Start prod build

    gulp build --prod true


#### TO-DO

* A more meaningful example in the app
* Watch file changes
* Support unit testing
* Create angular fork
* solve the double execution of webpack
* factor out the target directories from webpack config files
* experiment add font awesome
* experiment add bootstrap