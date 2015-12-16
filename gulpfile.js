var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

var paths = {
    js: ['packages/**/*.js'],
    css: ['packages/**/*.css'],
    less: ['packages/**/*.less']
};

gulp.task('jshint', function () {
    return gulp.src(paths.js)
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('jshint-stylish'));
});

gulp.task('csslint', function () {
    return gulp.src(paths.css)
        .pipe(plugins.csslint('.csslintrc'))
        .pipe(plugins.csslint.reporter());
});

gulp.task('lesslint', function () {
    return gulp.src(paths.less)
        .pipe(plugins.lesshint())
        .pipe(plugins.lesshint.reporter());
});

gulp.task('watch', function () {
    gulp.watch(paths.js, ['jshint']);
    gulp.watch(paths.css, ['csslint']);
    gulp.watch(paths.less, ['lesslint']);
});

gulp.task('nodemon', function () {
    plugins.nodemon({
        script: 'dolphin.js',
        ext: 'js html css less',
        ignore: ['./node_modules/**/*', './packages/**/node_modules/**/*'],
        watch: './packages',
        verbose: false
    });
});

// Default Task
gulp.task('default', ['jshint', 'lesslint', 'csslint', 'nodemon', 'watch']);

//fix for nodemon
process.on('SIGINT', function () {
    process.exit(0);
});
