'use strict';

var gulp    = require('gulp'),
    traceur = require('gulp-traceur'),
    connect = require('gulp-connect'),
    open    = require('open');

gulp.task('connect', function () {
  var livereloadPort = 39729;

  connect.server({
    port: 8080,
    livereload: {
      port: livereloadPort
    },
    middleware: function (connect) {
      function mountFolder(connect, dir) {
        return connect.static(require('path').resolve(dir));
      }

      return [
        require('connect-livereload')({ port: livereloadPort }),
        mountFolder(connect, 'node_modules/traceur/bin'),
        mountFolder(connect, 'app'),
      ];
    }
  });
});

gulp.task('watch', function () {
  gulp.watch([
    'app/**/*.html',
    'app/**/*.js',
    '!app/compiled/**'
  ], function (event) {
    return gulp.src(event.path)
      .pipe(connect.reload());
  });

  gulp.watch([
    'app/**/*.js'
  ], ['compile']);
});

gulp.task('compile', function () {
  return gulp.src([
      'app/**/*.js',
      '!app/compiled/**'
    ])
    .pipe(traceur())
    .pipe(gulp.dest('app/compiled'));
});

gulp.task('open', ['connect'], function () {
  require('open')('http://localhost:8080');
});

gulp.task('serve', function () {
  gulp.start('connect', 'watch', 'compile', 'open');
});
