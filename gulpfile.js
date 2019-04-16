var gulp = require('gulp');
var sass = require('gulp-sass');

const imagemin = require('gulp-imagemin');
 
gulp.task('default', () =>
    gulp.src('images/src/*')
        .pipe(imagemin())
        .pipe(gulp.dest('images/news'))
);

var cleanCSS = require('gulp-clean-css');
 
gulp.task('minify-css', () => {
  return gulp.src('styles/css-normal/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('styles/css/'));
});

var svgSprite = require('gulp-svg-sprite');

gulp.task('svgSprite', function () {
    return gulp.src('images/icons/*.svg') 
        .pipe(svgSprite({
			  mode: {
				symbol: { 
				  render: {
					css: false,
					scss: false 
				  },
				  dest: '.',
				  prefix: '.svg--%s',
				  sprite: 'sprite.svg'
				}
			  }
			}
        ))
        .pipe(gulp.dest('images/sprite/'));
});

var sassFiles = 'styles/scss/*.scss',
    cssDest = 'styles/css-normal/';

function style() {	
    return (
	     gulp
	        .src(sassFiles)
            .pipe(sass())
			.on("error", sass.logError)
            .pipe(gulp.dest(cssDest))
    );
}

exports.style = style;



gulp.task('watch',function() {
    gulp.watch(sassFiles, gulp.series('style'));
});