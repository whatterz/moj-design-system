const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

const config = require('./config.json');

gulp.task('sass', (done) => {
  gulp.src(config.paths.assets + 'sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.paths.public + 'stylesheets/'));
  done();
});
