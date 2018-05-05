var gulp = require('gulp'),
webpack = require('webpack');

gulp.task('scripts', function(callback){
  if(err) {
    console.log(err.toString());
  }
  webpack(require('../../webpack.config.js'), function(err, stats){
    console.log(stats.toString());
    callback();
  });
});
