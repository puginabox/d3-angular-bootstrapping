var gulp = require('gulp');
var args = require('yargs').argv;

// all configuration options in gulp.config.js (the ./ specifies a file rather than a package)
var config = require('./gulp.config')();
var plug = require('gulp-load-plugins')({
    lazy: true
});


//------------------------------------- SERVER

gulp.task('webserver', function() {
    gulp.src('src')
        .pipe(webserver({
            livereload: true,
            directoryListing: true,
            open: true
        }));
});

//------------------------------------- SERVER
gulp.task('vet', function() {
    log('Analyzing source with JSHint and JSCS');

    return gulp
        .src(config.alljs)
        .pipe(plug.print())
        .pipe(plug.jscs())
        .pipe(plug.jshint())
        .pipe(plug.jshint.reporter('jshint-stylish', {
            verbose: true
        }))
        .pipe(plug.jshint.reporter('fail'));
});

////////////

function log(msg) {
    if (typeof(msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                plug.util.log(plug.util.colors.blue(msg[item]));
            }
        }
    } else {
        plug.util.log(plug.util.colors.blue(msg));
    }
}
