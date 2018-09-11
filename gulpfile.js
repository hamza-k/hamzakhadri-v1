var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('sass', function(){
  return gulp.src('sass/**/*.+(scss|sass)')
    .pipe(sass())    // ici on utilise gulp-sass
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});


gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: '.'
    },
  })
})


gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('sass/**/*.+(scss|sass)', ['sass']);
  gulp.watch('**/*.html', browserSync.reload); 
  gulp.watch('src/**/*.js', browserSync.reload);
  // autres observations
})
