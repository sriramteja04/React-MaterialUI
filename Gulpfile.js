const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

gulp.task('scss', function() {
    return gulp
        .src('src/scss/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS({ rebae: false }))
        .pipe(
            autoprefixer({
                Browserslist: ['last 10 versions'],
            })
        )
        .pipe(gulp.dest('src/dest'));
});
