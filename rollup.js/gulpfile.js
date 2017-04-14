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
      gulp.src('test/js/*.js'),
      minifier(options, uglifyjs),
      gulp.dest('dist/js')
    ],
    cb
  );
});

gulp.task('typescript', function () {
    return rollup.rollup({
        entry: "./src/ts/skill.ts",
        plugins: [
        rollupTypescript()
        ],
    })
    .then(function (bundle) {
        bundle.write({
            format: "umd",
            moduleName: "library",
            dest: "./test/js/library.js",
            sourceMap: true
        });
    })
});

gulp.task('javascript', function () {
    return rollup.rollup({
        entry: "./src/js/main.js",
        plugins: [
            buble(),
            uglify()
        ],
    })
    .then(function (bundle) {
        bundle.write({
            format: "cjs",
            moduleName: "main",
            dest: "./test/js/bundle.js",
            sourceMap: true
        });
    })
});

gulp.task('scss', function () {
    return gulp.src('./src/scss/app.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('dist/css/'));
});


gulp.task('watch', function () {
    gulp.watch('./src/scss/app.scss', ['scss']);
    gulp.watch('./src/ts/skill.ts', ['typescript']);
    gulp.watch('./src/js/main.js', ['javascript']);
});
