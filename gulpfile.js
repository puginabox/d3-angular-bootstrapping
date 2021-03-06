/**
 *
 * Gulpfile setup
 * 
 * Griffin Byron, 2015
 **/


var gulp = require('gulp');
var args = require('yargs').argv;

// all configuration options in gulp.config.js (the ./ specifies a file rather than a package)
var config = require('./gulp.config')();
var plug = require('gulp-load-plugins')({
    lazy: true
});

//------------------------------------- SERVER
gulp.task('server', function() {
    gulp.src('src/')
        .pipe(plug.webserver({
            livereload: true,
            directoryListing: false, // don't show folder hierachy
            open: true,
            fallback: 'index.html'
        }));
});

//------------------------------------- Analyize JS
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

//------------------------------------- Inject library files into index.html
// gulp.task('inject', function() {
//     var target = gulp.src('./src/index.html');
//     // It's not necessary to read the files (will speed up things), we're only after their paths: 
//     var sources = gulp.src(['./src/js/lib/**/*.min.js', './src/css/*.css'], {
//         read: false
//     });

//     return target.pipe(plug.inject(sources))
//         .pipe(gulp.dest('./src'));
// });


gulp.task('inject', function() {
    var target = gulp.src(config.index);

    return target
        .pipe(plug.inject(gulp.src('./src/js/lib/**/*.min.js', {
            read: false
        }), {
            relative: true
        }))
        .pipe(gulp.dest('src'));;
});

//------------------------------------- Bower Dependency Upkeep
gulp.task('bower', function() {
    return plug.bower({
            cmd: 'update'
        })
        .pipe(gulp.dest('lib/'))
});


//------------------------------------- Logs
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
