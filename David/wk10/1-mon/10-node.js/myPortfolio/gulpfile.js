
var gulp = require('gulp');
var cssify = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
// gulp.task('', callback) format for this

gulp.task('test', function(){
    console.log('test task');
});

gulp.task('sass', function(){
    
    gulp.src('./*.scss')
    .pipe( sassify() )
    .pipe( gulp.dest('css'));
    .pipe( gulp.dest('css'))

});
gulp.task('watch', function(){
    gulp.watch('./*.scss', ['sass'])
});
