/**
 * @file Tâche pour concatener les fichiers JS dans assets et les compresser
 * @author Mikael Boutin
 * @version 0.0.1
 */
import gulp from 'gulp';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';
import plumber from 'gulp-plumber';
import sourcemaps from 'gulp-sourcemaps';
import consts from '../consts';
import settings from '../settings';

const { SCRIPT_FILES, BUILD_PATH } = consts;
let { browserSync } = settings;

/**
 * Tâche pour concatener les fichiers JS dans assets et les compresser
 */
let scriptsTask = () => {

  gulp.task('scripts', function(){
    return gulp.src( SCRIPT_FILES )
      .pipe(plumber())
      .pipe(sourcemaps.init())
      .pipe(concat('plugins.min.js'))
      .pipe(gulp.dest(BUILD_PATH + '/js'))
      .pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(plumber.stop())
      .pipe(gulp.dest(BUILD_PATH + '/js'));
  });

  gulp.task('scripts-and-refresh', ['scripts'], () => {
    browserSync.reload();
  });

};

export default scriptsTask;