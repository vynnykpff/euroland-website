import gulp from 'gulp';
const { src, dest } = gulp;

// Configuration
import { path } from '../config/path.js';
import { app } from '../config/app.js';

// Plugins
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import newer from 'gulp-newer';
import fonter from 'gulp-fonter';
import tt2woff2 from 'gulp-ttf2woff2';

// Processing Font
export const font = () => {
	return src(path.font.src)
		.pipe(
			plumber({
				errorHandler: notify.onError(error => ({
					title: 'Font',
					message: error.message,
				})),
			})
		)
		.pipe(newer(path.font.dest))
		.pipe(fonter(app.fonter))
		.pipe(dest(path.font.dest))
		.pipe(tt2woff2())
		.pipe(dest(path.font.dest));
};
