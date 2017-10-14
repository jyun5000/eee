let gulp = require('gulp');
let browserify = require('gulp-browserify');
let rename = require('gulp-rename');
let pump = require('pump');

gulp.task('default', function(cb) {
    pump([
        gulp.src('./bootstrap.js'),
        browserify({
            transform : ['hbsfy']
        }),
        rename('app.js'),
        gulp.dest('./app')
    ],cb)
});