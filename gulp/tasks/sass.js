var gulp = require("gulp");
var lint = require("gulp-sass-lint");
var sass = require("gulp-sass");
var combineMq = require("gulp-combine-mq");
var rename = require("gulp-rename");
var clean = require('gulp-clean-css');

var config = require("../config").sass;

gulp.task("sass", function() {
    return gulp.src(config.src)
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
