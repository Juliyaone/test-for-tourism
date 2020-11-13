"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var rename = require("gulp-rename");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var sourcemap = require("gulp-sourcemaps");
var csso = require("gulp-csso");
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");
var del = require("del");
var server = require("browser-sync").create();


gulp.task("css", function () {
  return gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(less())
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest("build/css"))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("data", function () {
  return gulp.src("source/data/data.json")
    .pipe(gulp.dest("build"))
});

gulp.task("libs", function () {
  return gulp.src("source/libs/code.jquery.comjquery-3.5.1.min.js")
    .pipe(gulp.dest("build/libs"))
});

gulp.task("inputmask", function () {
  return gulp.src("source/libs/jquery.inputmask.min.js")
    .pipe(gulp.dest("build/libs"))
});


gulp.task("html", function (){
  return gulp.src("source/*.html")
    .pipe(posthtml([
        include()
      ]))
    .pipe(gulp.dest("build"));
});

gulp.task("refresh", function(done) {
  server.reload();
  done();
});


gulp.task("server", function () {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/less/**/*.less", gulp.series("css"));
  gulp.watch("source/img/icon-*.svg", gulp.series("html", "refresh"));
  gulp.watch("source/*.html", gulp.series("html", "refresh"));
});

gulp.task("clean", function() {
  return del("build");
});

gulp.task("copy", function () {
  return gulp.src([
      "source/js/**"
    ], {
      base: "source"
    })
    .pipe(gulp.dest("build"));
});

gulp.task("build", gulp.series("clean", "copy", "css", "data", "libs", "inputmask", "html"));
gulp.task("start", gulp.series("build", "server"));
