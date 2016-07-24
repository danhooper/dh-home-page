var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var exec = require('child_process').exec;

gulp.task('backend', function() {
    nodemon({
        script: './backend/index.js',
        ext: 'js'
    }).on('restart', function() {
        console.log('backend restarted');
    });
});
