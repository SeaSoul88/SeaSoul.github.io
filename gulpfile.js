const {src, dest, series, watch, parallel } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const browserSync = require('browser-sync').create()
const clean = require('gulp-clean')

function buildScss() {
	return src('src/scss/**/*.scss')
		.pipe(sass({ includePaths: ['./node_modules'] }).on('error', sass.logError))
		.pipe(dest('src/css'))
		.pipe(dest('dist/css'))
}

function buildHtml() {
	return src('src/**/*.html').pipe(dest('dist'))
}

function copy() {
	return src(['src/assets/images**/*.*']).pipe(dest('dist/assets/images'))
}

function cleanDist() {
	return src('dist', { allowEmpty: true }).pipe(clean())
}

// Таск отслеживания изменения файлов
function serve() {
	watch('src/scss/**/*.scss', buildScss)
	watch('src/**/*.html', buildHtml)
}

// Создание дев-сервера
function createDevServer() {
	browserSync.init({
		server: 'src',
		notify: false,
	})
}

exports.sass = buildScss
exports.html = buildHtml
exports.copy = copy
exports.cleanDist = cleanDist
exports.build = series(cleanDist, buildScss, buildHtml, copy)
exports.cleanDist = cleanDist
exports.build = series(cleanDist, buildScss, buildHtml, copy)
exports.default = series(buildScss, parallel(createDevServer, serve))
