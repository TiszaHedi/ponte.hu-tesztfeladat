const {src, dest, watch} = require('gulp');
const compileSass = require('gulp-sass')(require('sass'));
const minifyCss = require('gulp-clean-css');
const concat = require('gulp-concat');
const merge = require('merge-stream');

const bundle = () => {
    return bundleSass().
    pipe(copyStaticFiles());
}

const bundleSass = () => {
    return src('./static/scss/global.scss')
    .pipe(compileSass())
    .pipe(minifyCss())
    .pipe(concat('bundle.css'))
    .pipe(dest('./dist/css/'));
}

const copyStaticFiles = () => {
    const folders = [
        {src: 'static/html/*', dest: 'dist'},
        {src: 'static/assets/*', dest: 'dist/assets'},
        {src: 'static/js/*', dest: 'dist/js'}
    ];

    let tasks = folders.map((el) => {
        return src(el.src)
        .pipe(dest(el.dest));
    })

    return merge(tasks);
}

const devWatch = () => {
    watch('./static/scss/**/*.scss', bundleSass);
    watch('./static/html/*', copyStaticFiles)
    watch('./static/js/*', copyStaticFiles);
}

exports.bundle = bundle;
exports.devWatch = devWatch;