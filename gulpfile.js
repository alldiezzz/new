var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function(){
   return gulp.src('gulp/assets/**/*.scss') // Get source files with gulp.src
      .pipe(sass()) // Sends it through a gulp plugin
      .pipe(gulp.dest('gulp/assets/stylesheets/')) // Outputs the file in the destination folder
      .pipe(browserSync.reload({
        stream: true
      }))
});

gulp.task('watch',['browserSync', 'sass'], function(){
  gulp.watch('gulp/assets/**/*.scss', ['sass'])
  // Reload s the browser whenever HTML or JS files change
  gulp.watch('app/view/*.erb', browserSync.reload);
  gulp.watch('app/view/*.slim', browserSync.reload);
  gulp.watch('gulp/assets/**/*.js', browserSync.reload);
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'gulp'
    },
  })
})
