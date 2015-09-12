var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var notify = require('gulp-notify');

// sass
gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/css/'))
});


// js
gulp.task('minify-js', function () {
    return gulp.src('src/**/*.js') //select all javascript files under js/ and any subdirectory
        .pipe(concat('plugin.min.js')) //the name of the resulting file
        .pipe(uglify())
        .pipe(gulp.dest('dist/js')) //the destination folder
        .pipe(notify({ message: 'Finished minifying JavaScript'}));
});

// css
gulp.task('minify-css', function() {
  return gulp.src(['bower_components/bootstrap/dist/css/bootstrap.min.css',
	'src/**/*.css'])
		.pipe(concat('styles.min.css')) //the name of the resulting file
    // .pipe(sourcemaps.init())
		.pipe(minifyCss({compatibility: 'ie8'}))
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css'));
});

//Watch task
gulp.task('watch', function() {
    gulp.watch('sass/**/*.scss',['styles']);
		gulp.watch('src/**/*.js', ['minify-js']);
});


gulp.task('default', ['minify-css', 'minify-js', 'watch']);


