import gulp from 'gulp'

gulp.task('build',gulp.series('clean','css','pages','scripts','browser','serve',function(done){
	done()
}));