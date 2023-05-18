import gulp from 'gulp';
const { src, dest } = gulp;

// Configuration
import { path } from '../config/path.js';
import { app } from '../config/app.js';

// Plugins
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import concat from 'gulp-concat';
import cssimport from 'gulp-cssimport';
import autoprefixer from 'gulp-autoprefixer';
import csso from 'gulp-csso';
import rename from 'gulp-rename';
import size from 'gulp-size';
import shorthand from 'gulp-shorthand';
import groupCssMediaQueries from 'gulp-group-css-media-queries';
import webpCss from 'gulp-webp-css';

// Processing CSS
export const css = () => {
	return src(path.css.src, { sourcemaps: app.isDev })
		.pipe(
			plumber({
				errorHandler: notify.onError(error => ({
					title: 'CSS',
					message: error.message,
				})),
			})
		)
		.pipe(concat('main.css'))
		.pipe(cssimport())
		.pipe(webpCss())
		.pipe(autoprefixer())
		.pipe(shorthand())
		.pipe(groupCssMediaQueries())
		.pipe(size({ title: 'main.css' }))
		.pipe(dest(path.css.dest, { sourcemaps: app.isDev }))
		.pipe(rename({ suffix: '.min' }))
		.pipe(csso())
		.pipe(size({ title: 'main.min.css' }))
		.pipe(dest(path.css.dest, { sourcemaps: app.isDev }));
};
