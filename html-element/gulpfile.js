var gulp = require('gulp');
var rollup = require('rollup');
var rollupjs = require('gulp-rollup');
var rollupTypescript = require('rollup-plugin-typescript');
var buble = require('rollup-plugin-buble');
var pump = require('pump');
var uglify = require('gulp-uglify');
var uglifyjs = require('uglify-js');
var minifier = require('gulp-uglify/minifier');
var minify = require('uglify-js');
var sourcemaps = require("gulp-sourcemaps");
var sass = require('gulp-sass');
var concat = require("gulp-concat");

gulp.task('default', function (cb) {
  // the same options as described above
  var options = {
    preserveComments: 'license'
  };

  pump([
      gulp.src('public/js/*.js'),
      minifier(options, uglifyjs),
      gulp.dest('public/js')
    ],
    cb
  );
});

gulp.task('bundle', function() {
  gulp.src('./resources/js/*.js')
    .pipe(sourcemaps.init())
      // transform the files here.
      .pipe(rollupjs({
        input: './src/main.js'
      }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist'));
});

gulp.task('typescript', function () {
    return rollup.rollup({
        entry: "./resources/**/*.ts",
        plugins: [
        rollupTypescript()
        ],
    })
    .then(function (bundle) {
        bundle.write({
            format: "umd",
            moduleName: "library",
            dest: "./public/js/library.js",
            sourceMap: true
        });
    })
});

gulp.task('javascript', function () {
    return rollup.rollup({
        entry: "../resources/js/*.js",
        plugins: [
            buble(),
            uglify()
        ],
    })
    .then(function (bundle) {
        bundle.write({
            format: "cjs",
            moduleName: "main",
            dest: "./public/js/bundle.js",
            sourceMap: true
        });
    })
});

gulp.task('scss', function () {
    return gulp.src('./resources/scss/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('public/css/'));
});


gulp.task('watch', function () {
    gulp.watch('../resources/**/*.scss', ['scss']);
    gulp.watch('../resources/**/*.ts', ['typescript']);
    gulp.watch('../resources/**/*.js', ['javascript']);
});
