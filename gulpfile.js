const gulp = require('gulp');
const minCss = require('gulp-clean-css');
const rename = require('gulp-rename');

const browserSync = require('browser-sync').create();

gulp.task('minifyCSS', function() {
  return gulp.src('app/css/*.css')
    .pipe(minCss())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('public/css/'));
});
gulp.task('JS', function(){
  return gulp.src('app/js/*.js')
  
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('public/js/'));
});

gulp.task('serve', function() {
  browserSync.init({
    server: 'public'
  });
  browserSync.watch('public/**/*.*').on('change', browserSync.reload);
});

gulp.task('watchFiles', function() {
  gulp.watch('app/css/*.css', gulp.series('minifyCSS'));
  gulp.watch('app/js/*.js', gulp.series('JS'));
});

gulp.task('default', gulp.parallel('watchFiles', 'serve'));
