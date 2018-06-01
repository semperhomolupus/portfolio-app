module.exports = function () {
  const p = global.p;
  p.gulp.task("vendor", function () {
    return p.gulp
      .src(p.paths.src.vendor)
      .pipe(p.gulp.dest(p.paths.build.vendor)) 
      .pipe(p.browserSync.reload({
        stream: true
      }));
  });
};
