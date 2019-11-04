var gulp = require('gulp');
var rename =  require('gulp-rename');
var sass = require('gulp-sass');

var styleSRC = './static/scss/style.scss';
var styleDIST = './static/css/';

gulp.task('styles', function(){
    gulp.src(styleSRC)
    .pipe(sass({
        errLogToConsole: true,
        outputStyle: 'compressed'
    }))
    .on('error', console.error.bind(console))
    .pipe( rename({ suffix:'.min'}))
    .pipe( gulp.dest( styleDIST));
    
});