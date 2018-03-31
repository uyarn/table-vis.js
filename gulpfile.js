// gulp configuration file
//  use gulp to do the task automatically
var gulp = require('gulp');
var browserify = require('gulp-browserify');

// Basic usage
gulp.task('scripts', function() {
    // Single entry point to browserify
    gulp.src('src/tabular_vis.js')
        .pipe(browserify({
          insertGlobals : true,
          debug : !gulp.env.production
        }))
        .pipe(gulp.dest('./dist/'))
});


gulp.task('default', ['scripts']);
