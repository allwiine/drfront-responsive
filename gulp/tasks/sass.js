var gulp = require("gulp");
var lint = require("gulp-sass-lint");
var sass = require("gulp-sass");
var combineMq = require("gulp-combine-mq");
var rename = require("gulp-rename");
var clean = require('gulp-clean-css');

var config = require("../config").sass;

gulp.task("sass", ["sass:lint"], function() {
    return gulp.src(config.default)
        .pipe(sass())
        .pipe(combineMq({
            beautify: true
        }))
        .pipe(rename(config.name))
        .pipe(gulp.dest(config.dest))
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(clean({
            debug: true
        }))
        .pipe(gulp.dest(config.dest))
});

gulp.task("sass:lint", function() {
    return gulp.src(config.src)
        .pipe(lint())
        .pipe(lint.format())
        .pipe(lint.failOnError())        
});