var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function() {
  fileTracker();
});


gulp.task('sass', function () {
  return gulp.src('./sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'))
});

/*
* This keeps track of the files
*/
function fileTracker() {
/* When a file is modified, runs the task in the square brackets */
  gulp.watch('sass/*.sass', ['sass']);
}
