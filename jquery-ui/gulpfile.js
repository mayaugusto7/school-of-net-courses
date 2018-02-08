var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    imageminJpegtran = require('imagemin-jpegtran'),
    imageminPngquant = require('imagemin-pngquant'),
    htmlmin = require('gulp-htmlmin'),
    gls = require('gulp-live-server'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    less = require('gulp-less'),
    LessPluginCleanCSS = require('less-plugin-clean-css'),
    cleancss = new LessPluginCleanCSS({ advanced: true });

gulp.task('default', ['sass', 'less', 'javascript', 'viewhtmlmin', 'image', 'watch', 'serve']);

gulp.task('sass', function() {
    return gulp.src('src/sass/**/*.scss')
        .pipe(concat('style.min.css'))
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('javascript', function() {
    return gulp.src('src/js/**/*.js')
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('image', function() {
    return gulp.src('src/img/*')
        .pipe(imagemin({
            interlaced: true,
            progressive: true,
            svgoPlugins: [{ removeViewBox: true }],
            use: [imageminPngquant()]
        }))
        .pipe(gulp.dest('dist/img'));
});

gulp.task('viewhtmlmin', function() {
    return gulp.src('src/views/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('.'));
});


/**
 * Observa alteracoes no sistema e executa tarefas automaticamente
 */
gulp.task('watch', function() {
    gulp.watch('src/sass/**/*.scss', ['sass']);
    gulp.watch('src/less/**/*.less', ['less']);
    gulp.watch('src/js/**/*.js', ['javascript']);
    gulp.watch('src/img/*', ['image']);
    gulp.watch('src/views/**/*.html', ['viewhtmlmin']);
});

gulp.task('serve', function() {
    var server = gls.static('./', 8000);

    server.start();

    gulp.watch('dist/css/**/*.css', function(file) {
        server.notify.apply(server, [file]);
    });

    gulp.watch('dist/css/**/*.css', function(file) {
        server.notify.apply(server, [file]);
    });

    gulp.watch('dist/js/**/*.js', function(file) {
        server.notify.apply(server, [file]);
    });

    gulp.watch('dist/img/**/*', function(file) {
        server.notify.apply(server, [file]);
    });

    gulp.watch('./*.html', function(file) {
        server.notify.apply(server, [file]);
    });

});

gulp.task('lint', function() {
    return gulp.src('src/js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

gulp.task('less', function() {
    return gulp.src('src/less/**/*.less')
        .pipe(concat('styleless.min.css'))
        .pipe(less())
        .pipe(gulp.dest('dist/css'));
});