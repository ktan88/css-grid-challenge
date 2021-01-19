const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

const srcPath = 'assets/scss/**/*.scss';
const destPath = 'css';

gulp.task('sass', function () {
    return gulp.src(srcPath) // Get source files with gulp.src
        .pipe(sass()) // Sends it through a gulp plugin
        .pipe(gulp.dest(destPath)) // Outputs the file in the destination folder
        .pipe(browserSync.stream());
});

gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch(srcPath, gulp.series('sass'));
    gulp.watch("index.html").on('change', browserSync.reload);
});
