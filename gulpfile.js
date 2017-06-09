var gulp = require('gulp');
var connect = require('gulp-connect');
var opn = require('opn');

// собственно вот здесь мы и запускаем локадьный север!

gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
 	
  });
  opn('http://localhost:8080  ');
});
 
 
//работа с html

gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload()); 
});
 
gulp.task('css', function () {
  gulp.src('./app/css/*.css')
    .pipe(connect.reload());
});

gulp.task('js', function () {
  gulp.src('./app/js/*.js')
    .pipe(connect.reload());
});

// a сама слежка описана здесь!

gulp.task('watch', function () {
  gulp.watch(['./app/*.html'], ['html']);
  gulp.watch(['./app/css/*.css'], ['css']);
  gulp.watch(['./app/js/*.js'], ['js']);
});
 
 //здесь задачи по умолчанию!
 //
gulp.task('default', ['connect', 'watch']);