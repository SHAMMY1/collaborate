const gulp = require('gulp');

gulp.task('default', () => {
    require('./server');
});

gulp.task('dev', ['browserSync']);

gulp.task('browserSync', ['nodemon'], () => {
    const browserSync = require('browser-sync');

    browserSync.init({
        proxy: 'http://localhost:3000',
        port: 3001,
        ui: { port: 3002 },
    });
});

gulp.task('nodemon', (cb) => {
    const browserSync = require('browser-sync');
    const gulpNodemon = require('gulp-nodemon');
    let started = false;

    return gulpNodemon({
        script: 'server.js',
        ext: 'js',
        execMap: { js: 'node --inspect' },
        ignore: ['node_modules'],
    }).on('start', () => {
        if (!started) {
            cb();
            started = true;
        }
    }).on('restart', () => {
        setTimeout(() => {
            browserSync.reload();
        }, 2000);
    });
});
