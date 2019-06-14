// Define dependencies
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssnano = require('cssnano'),
    sourcemaps = require('gulp-sourcemaps'),
    notify = require('gulp-notify'),
    // rename = require('gulp-rename'),
    /*htmlmin = require('gulp-htmlmin'),*/
    browserSync = require('browser-sync').create();

// Variables paths
var paths = {
    styles: {
        src: './assets/scss/**/*.scss',
        dest: './',
    }
};

function reload(done) {
    browserSync.reload();
    done();
}

// Define tasks after requiring dependencies
function style() {
    return (
        gulp
            .src(paths.styles.src)
            // Initialize sourcemaps before compilation starts
            .pipe(sourcemaps.init())
            .pipe(sass())
            .on("error", sass.logError)
            // Use postcss with autoprefixer and compress the compiled file using cssnano
            .pipe(postcss([autoprefixer(), cssnano()]))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(paths.styles.dest))
            .pipe(browserSync.stream())
            .pipe( notify( {
                    message: 'Tâche "scss" terminée 😁',
                    onLast: true }
                )
            )
    );
}
function watch() {
    browserSync.init({
        proxy: 'localhost/elmus-project/',
        port: 8888
    });
    gulp.watch(paths.styles.src, style );

    // Which files to watch to trigger the reload
    gulp.watch('*.js', reload);
    gulp.watch('*.scss', reload);
    gulp.watch('*.html', reload);
}

// Don't forget to expose the task!
exports.watch = watch;
