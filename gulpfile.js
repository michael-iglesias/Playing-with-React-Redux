var gulp = require('gulp');
var webpack = require('webpack-stream');
connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: 'build',
    port: 9000,
    livereload: true
  });
});

gulp.task('scripts', function() {
  return gulp.src('./src/app/app.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./build'))
    .pipe(connect.reload());
});

gulp.task('html', function() {
  return gulp.src('./src/**/*.html')
    .pipe(gulp.dest('./build'))
    .pipe(connect.reload());
});

gulp.task('default', ['scripts', 'html', 'connect'], function() {
  gulp.watch('./src/app/**/*.js', ['scripts']);
  gulp.watch('./src/app/**/*.html', ['html']);
});
