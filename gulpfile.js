// Require Gulp first!
var gulp = require('gulp'); // Load Gulp!
// Now that we've installed the uglify package we can require it:
var uglify = require('gulp-uglify'),
    rename = require('gulp-rename');
var browserSync = require('browser-sync').create();
    eslint = require('gulp-eslint');


gulp.task('lint', function (){
  return gulp.src('js/*.js')
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});

// script task to minify JS, rename and put in build folder. Modify to call lint first.
gulp.task('script', gulp.series('lint', function(){
  return gulp.src('./js/*.js') // What files do we want gulp to consume?
    .pipe(uglify()) // Call the uglify function on these files
    .pipe(rename({ extname: '.min.js' })) // Rename the uglified file
    .pipe(gulp.dest('./build/js')) // Where do we put the result?
}));

// just for test+fun
gulp.task('say_hello', function(done){
  console.log('Hello!');
  done();
});

// watches js files, once a savechange is detected, runs script ugilfy+rename+save to build/js folder
gulp.task('watch', function() {
  gulp.watch('js/*.js', gulp.parallel('script'));
});

                          // gulp.task('css-sync', function(){
                          //   return gulp.src('style.css')
                          // })

                          // gulp.watch('style.css').on('change', browserSync.reload);

// browser sync, watches build/js folder
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
        baseDir: "./"
    }
  });
  gulp.watch('build/js/*.js').on('change', browserSync.reload);
});


// Modify our default task method by passing an array of task names
// Nope, make our default run functions in parallel
gulp.task('default', gulp.parallel('say_hello', 'watch', 'browser-sync'));