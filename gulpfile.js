var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var concatCss = require('gulp-concat-css');

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
});

// concat skript

gulp.task('scripts', function() {
  return gulp.src('app/js/libs/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('app/js/'));
});


// watch

gulp.task('watch', ['browser-sync', 'scripts', 'concat-css'], function() {
	gulp.watch('app/*html', browserSync.reload);
	gulp.watch('app/css/**/*.css', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
	gulp.watch('app/css/assets/*.css', ['concat-css']);
});

// concat css

gulp.task('concat-css', function () {
  return gulp.src('app/assets/*.css')
    .pipe(concatCss("all.css"))
    .pipe(gulp.dest('app/css/'));
});

gulp.task('default', ['watch']);