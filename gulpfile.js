const {src, dest, watch} = require('gulp');
const compileSass = require('gulp-sass')(require('sass'));
const minifyCss = require('gulp-clean-css');
const concat = require('gulp-concat');

const bundleSass = () => {
    return src('./static/scss/global.scss')
    .pipe(compileSass())
    .pipe(minifyCss())
    .pipe(concat('bundle.css'))
    .pipe(dest('./dist/css/'));
}

const copyStaticFiles = () => {
    return src('./static/html/*')
    .pipe(dest('./dist'));
}

const devWatch = () => {
    watch('./static/scss/**/*.scss', bundleSass);
    watch('./static/html/*', copyStaticFiles);
}

exports.bundleSass = bundleSass;
exports.copyStaticFiles = copyStaticFiles;
exports.devWatch = devWatch;