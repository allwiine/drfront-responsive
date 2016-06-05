var gulp = require("gulp");
var config = require("../config");

gulp.task("dev", ["clean", "sass", "watch"]);
