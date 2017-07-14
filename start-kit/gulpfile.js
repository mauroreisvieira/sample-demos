'use strict';
var gulp = require('gulp');
var rollup = require('rollup');
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

gulp.task('typescript', function () {
    return rollup.rollup({
        entry: "./resources/ts/skill.ts",
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
        entry: "./resources/js/main.js",
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
    return gulp.src('./resources/scss/app.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('public/css/'));
});


gulp.task('watch', function () {
    gulp.watch('./resources/scss/app.scss', ['scss']);
    gulp.watch('./resources/ts/skill.ts', ['typescript']);
    gulp.watch('./resources/js/main.js', ['javascript']);
});
