const gulp             = require('gulp');
const rollup           = require('rollup');
const rollupTypescript = require('rollup-plugin-typescript');
const buble            = require('rollup-plugin-buble');
const pump             = require('pump');
const uglify           = require('gulp-uglify');
const uglifyjs         = require('uglify-js');
const minifier         = require('gulp-uglify/minifier');
const sass             = require('gulp-sass');
const eslint           = require('gulp-eslint');

gulp.task('production', function (cb) {
    // the same options as described above
    var options = {
        preserveComments: 'license'
    };

    pump([
        gulp.src('public/js/*.js'),
        minifier(options, uglifyjs),
        gulp.dest('public/js')
    ], cb);
});

gulp.task('js --app', function () {
    return rollup.rollup({
        entry: "./resources/js/AppDrawer.js",
        plugins: [
            buble(),
            uglify(),
            eslint()
        ],
    })
    .then(function (bundle) {
        bundle.write({
            format: "cjs",
            moduleName: "main",
            dest: "./public/js/appdrawer.js",
            sourceMap: true
        });
    });
});

gulp.task('scss', function () {
    return gulp.src('./resources/scss/app.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('public/css/'));
});

gulp.task('watch', function () {
    gulp.watch('./resources/scss/app.scss', ['scss']);
    gulp.watch('./resources/**/*.js',
        [
            'js --app'
        ]
    );
});

