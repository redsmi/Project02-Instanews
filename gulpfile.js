// Require Gulp first!
var gulp = require('gulp'); // Load Gulp!
// Now that we've installed the uglify package we can require it:
var uglify = require('gulp-uglify');
    rename = require('gulp-rename');
var browserSync = require('browser-sync').create();
    eslint = require('gulp-eslint');
    sass = require('gulp-sass');
    autoprefixer = require('gulp-autoprefixer');
    cssnano = require('gulp-cssnano');
    prettyError = require('gulp-prettyerror');

// gulp task for sass
  gulp.task('sass', function(){
    return gulp.src('./scss/style.scss')
    .pipe(sass())
    .pipe(prettyError())
    .pipe(autoprefixer({
        browsers: ['last 2 versions']
      })
    )
    .pipe(gulp.dest('./build/css'))
    .pipe(cssnano())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('./build/css'));
  });

// Lint task for the JS
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

// watches js files, once a savechange is detected, runs script ugilfy+rename+save to build/js folder
gulp.task('watch', function() {
  gulp.watch('scss/*.scss', gulp.series('sass'));
  gulp.watch('js/*.js', gulp.series('script'));
});

//gulp browser sync task
gulp.task('browser-sync', function() {
  browserSync.init({
     server: {
        baseDir: './'
     }
  });
  gulp.watch(['*.html','build/css/*.css','./build/js/*.js']).on('change', browserSync.reload);
});


// Modify our default task method by passing an array of task names
// Nope, make our default run functions in parallel
gulp.task('default', gulp.parallel('watch', 'browser-sync'));