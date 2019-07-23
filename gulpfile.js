const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync').create();
const rename = require("gulp-rename");
const cleanCss = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const postcss = require('gulp-postcss');
const concat = require('gulp-concat');

const cssFiles = [
    './src/sass/fonts.sass',

    './src/sass/header.sass',
    './src/sass/first.sass',
    './src/sass/second.sass',
    './src/sass/third.sass',
    './src/sass/footer.sass',
    
    './src/sass/ieUpgrade.sass',
    './src/sass/media.sass'
]

function styles() {
    return gulp.src(cssFiles, { allowEmpty: true })
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('main.css'))
        .pipe(postcss([ autoprefixer(
            '>0.1%'
        ) ]))
        .pipe(gulp.dest('./build/css'))
        .pipe(cleanCss({
        level: 2
        }))
        .pipe(rename({
            suffix: ".min",
        }))
        .pipe(gulp.dest('./build/css'))

        .pipe(browserSync.stream());
}

function animation() {
    return gulp.src('./src/js/*.js')
        .pipe(gulp.dest('./build/js'))
        .pipe(babel({
            presets: ['env']
            }))
        .pipe(uglify({
            toplevel: true
        }))
        .pipe(rename({
            suffix: ".min",
            }))
        .pipe(gulp.dest('./build/js'))
    
        .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: "./"
    });
    gulp.watch("./src/sass/*.sass").on('change', function(){
        styles();
        browserSync.reload();
    });
    gulp.watch("./src/js/*.js", animation);
    gulp.watch("./index.html").on('change', browserSync.reload);
}

gulp.task('styles', styles);
gulp.task('animation', animation);

gulp.task('watch', watch);
