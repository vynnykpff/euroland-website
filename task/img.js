import gulp from 'gulp';
const { src, dest } = gulp;

// Configuration
import { path } from '../config/path.js';
import { app } from '../config/app.js';

// Plugins
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import imagemin from 'gulp-imagemin';
import newer from 'gulp-newer';
import webp from 'gulp-webp';
import gulpIf from 'gulp-if';

// Processing Image
export const img = () => {
	return src(path.img.src)
		.pipe(
			plumber({
				errorHandler: notify.onError(error => ({
					title: 'Image',
					message: error.message,
				})),
			})
		)
		.pipe(newer(path.img.dest))
		.pipe(webp())
		.pipe(dest(path.img.dest))
		.pipe(src(path.img.src))
		.pipe(newer(path.img.dest))
		.pipe(gulpIf(app.isProd, imagemin(app.imagemin)))
		.pipe(dest(path.img.dest));
};
