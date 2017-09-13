const gulp = require('gulp');

/*
-- TOP LEVEL FUNCTIONS --
    gulp.task - Define tasks
    gulp.src - Point tofiles to use
    gulp.dest - Points to folder to output
    gulp.watch - Watch files and folders for changes
--------------------------
*/

gulp.task('message', function(){
    console.log("Gulp is running..");
});

//Copy All HTML files
gulp.task('copyHTML', function(){
   gulp.src('src/*.html') 
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['message', 'copyHTML']);

gulp.task('watch', function(){
    gulp.watch('js/*.js', [/* Task to run*/]);
});