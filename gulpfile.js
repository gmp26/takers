var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var vulcanize = require('gulp-vulcanize');

gulp.task('default', function () {
    var DEST_DIR = 'dist';

    return gulp.src('index.html')
        .pipe(vulcanize({
            dest: DEST_DIR,
            strip: true,
            csp: true,
            inline: true
        }))
        .pipe($.if('*.js', $.uglify({
        	preserveComments: 'some'
        })))
        .pipe(gulp.dest(DEST_DIR))
        .pipe($.size({title: 'vulcanize'}));
});