import gulp from 'gulp';
const { series, parallel, watch } = gulp;
import browserSync from 'browser-sync';
const bs = browserSync.create();

// Configuration
import { path } from './config/path.js';
import { app } from './config/app.js';

// Tasks
import { clear } from './task/clear.js';
import { html } from './task/html.js';
import { scss } from './task/scss.js';
import { js } from './task/js.js';
import { img } from './task/img.js';
import { font } from './task/font.js';
// import { pug } from './task/pug.js';
// import { css } from './task/css.js';

// Server
const server = () => {
	bs.init({
		server: {
			baseDir: path.root,
		},
	});
};

// Watcher
const watcher = () => {
	// watch(path.css.watch, css).on('all', bs.reload);
	watch(path.html.watch, html).on('all', bs.reload);
	watch(path.scss.watch, scss).on('all', bs.reload);
	watch(path.js.watch, js).on('all', bs.reload);
	watch(path.img.watch, img).on('all', bs.reload);
	watch(path.font.watch, font).on('all', bs.reload);
};

// Tasks
export { html, scss, js, img, font };

// Assembly
const build = series(clear, parallel(html, scss, js, img, font));
const dev = series(build, parallel(watcher, server));

export default app.isProd ? build : dev;
