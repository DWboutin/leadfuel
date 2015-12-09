/**
 * @file Tâche pour observer les changements dans les fichiers
 * @author Mikael Boutin
 * @version 0.0.1
 */
import gulp from 'gulp';
import consts from '../consts';

const { SRC_PATH } = consts;

/**
 * Tâche pour observer les changements dans les fichiers
 */
let watchTask = () => {

  gulp.task('watch', () => {
    gulp.watch([SRC_PATH + '/components/**/**.js', SRC_PATH + '/client/*.js', SRC_PATH + '/*.js'], ['bundle-and-refresh']);
    gulp.watch(SRC_PATH + '/assets/js/**/**.js', ['scripts-and-refresh']);
    gulp.watch(SRC_PATH + '/assets/sass/**/**.scss', ['sass-and-refresh']);
  });

};

export default watchTask;