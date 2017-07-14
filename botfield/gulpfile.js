var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');
var source = require('vinyl-source-stream');

gulp.task('sass', function () {
  return gulp.src('app.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('build/css/'));
});

gulp.task('browserify', function() {
    gulp.src('app.js')
        .pipe(browserify({
          insertGlobals : true,
          debug : !gulp.env.production
        }))
        .pipe(gulp.dest('build/js/'))
});

gulp.task('watch', function () {
  gulp.watch('app.scss', ['sass']);
  gulp.watch('app.js', ['browserify']);
});
