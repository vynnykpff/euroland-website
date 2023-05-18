import gulp from 'gulp';
const { src, dest } = gulp;

// Configuration
import { path } from '../config/path.js';
import { app } from '../config/app.js';

// Plugins
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import autoprefixer from 'gulp-autoprefixer';
import csso from 'gulp-csso';
import rename from 'gulp-rename';
import size from 'gulp-size';
import shorthand from 'gulp-shorthand';
import groupCssMediaQueries from 'gulp-group-css-media-queries';
import gulpSass from 'gulp-sass';
import sass from 'sass';
import sassGlob from 'gulp-sass-glob';
import webpCss from 'gulp-webp-css';

const sassPlugin = gulpSass(sass);

// Processing SCSS
export const scss = () => {
	return src(path.scss.src, { sourcemaps: app.isDev })
		.pipe(
			plumber({
				errorHandler: notify.onError(error => ({
					title: 'SCSS',
					message: error.message,
				})),
			})
		)
		.pipe(sassGlob())
		.pipe(sassPlugin())
		.pipe(webpCss())
		.pipe(autoprefixer())
		.pipe(shorthand())
		.pipe(groupCssMediaQueries())
		.pipe(size({ title: 'main.css' }))
		.pipe(dest(path.scss.dest, { sourcemaps: app.isDev }))
		.pipe(rename({ suffix: '.min' }))
		.pipe(csso())
		.pipe(size({ title: 'main.min.css' }))
		.pipe(dest(path.scss.dest, { sourcemaps: app.isDev }));
};
