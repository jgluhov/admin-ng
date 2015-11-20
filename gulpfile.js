var gulp = require('gulp');
var concat = require('gulp-concat');
var config = require('./config');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('vendor:js', function() {
  gulp.src(config.js.libraries)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('./js'))
    .pipe(uglify())
    .pipe(rename('vendor.min.js'))
    .pipe(gulp.dest('./js'))
});

gulp.task('default', ['vendor:js'], function() {
  console.log('Success');
});
