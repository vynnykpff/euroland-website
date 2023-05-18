import gulp from 'gulp';
const { src, dest } = gulp;

// Configuration
import { path } from '../config/path.js';
import { app } from '../config/app.js';

// Plugins
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import fileInclude from 'gulp-file-include';
import htmlmin from 'gulp-htmlmin';
import size from 'gulp-size';
import webpHtml from 'gulp-webp-html';

// Processing HTML
export const html = () => {
	return src(path.html.src)
		.pipe(
			plumber({
				errorHandler: notify.onError(error => ({
					title: 'HTML',
					message: error.message,
				})),
			})
		)
		.pipe(fileInclude())
		.pipe(webpHtml())
		.pipe(size({ title: 'Before compression' }))
		.pipe(htmlmin(app.htmlmin))
		.pipe(size({ title: 'After compression' }))
		.pipe(dest(path.html.dest));
};
