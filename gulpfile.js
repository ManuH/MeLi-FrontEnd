var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var postcss      = require('gulp-postcss');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var uglify = require('gulp-uglify');
var pump = require('pump');
var concat = require('gulp-concat');
var clean = require('gulp-clean');

gulp.task('default', ['clean', 'sass', 'autoprefixer', 'compress']);

gulp.task('sass', function () {
  return gulp.src('./*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('./'));
});

gulp.task('autoprefixer', function () {
    
    return gulp.src('./*.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./'));
});

gulp.task('compress', function (cb) {
  pump([
        gulp.src(['./*.js', '!gulpfile.js', '!*.min.js'] ),
        concat('scripts.js'),
        uglify(),
        rename('scripts.min.js'),
        gulp.dest('./')
    ],
    cb
  );
});

gulp.task('clean', function () {
    return gulp.src(['./*.min.js', './*.css', './*.map'], {read: false})
        .pipe(clean());
});