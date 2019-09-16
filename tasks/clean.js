import gulp from 'gulp';
import del from 'del';
import args from './util/args';
console.log(2222)
gulp.task('clean',()=>{
  return del(['server/public','server/views'])
})
