
var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');

gulp.task('default', function () {
    var bundler = browserify('index.js');
    bundler.transform(babelify , {presets: ["es2015"], plugins: ['transform-runtime']});

    bundler.bundle()
        .on('error', function (err) { console.error(err); })
        .pipe(source('index.js'))
        .pipe(buffer())
        .pipe(gulp.dest('cordova/www'));
});
