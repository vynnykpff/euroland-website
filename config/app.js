// Data
import news from '../data/news.json' assert { type: 'json' };

const isProd = process.argv.includes('--production');
const isDev = !isProd;

export const app = {
	isProd,
	isDev,

	htmlmin: {
		collapseWhitespace: isProd,
	},

	pug: {
		pretty: isDev,
		data: {
			news,
		},
	},

	webpack: {
		mode: isProd ? 'production' : 'development',
	},

	imagemin: {
		verbose: true,
	},

	fonter: {
		formats: ['ttf', 'woff', 'eot', 'svg'],
	},
};
