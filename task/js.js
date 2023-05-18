import gulp from 'gulp';
const { src, dest } = gulp;

// Configuration
import { path } from '../config/path.js';
import { app } from '../config/app.js';

// Plugins
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import babel from 'gulp-babel';
import webpack from 'webpack-stream';

// Processing JavaScript
export const js = () => {
	return src(path.js.src, { sourcemaps: app.isDev })
		.pipe(
			plumber({
				errorHandler: notify.onError(error => ({
					title: 'JavaScript',
					message: error.message,
				})),
			})
		)
		.pipe(babel())
		.pipe(webpack(app.webpack))
		.pipe(dest(path.js.dest, { sourcemaps: app.isDev }));
};
