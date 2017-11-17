var port = 3000;

const dev = true;
const isPro = process.env.NODE_ENV == 'production';

const url = dev ? '' : 'http://xiaoyown.club';
const localUrl = 'http://192.168.0.222:3000'

module.exports = {
	port: port,
	pathUrl: localUrl,
	apiUrl: isPro ? url : '/api',
	api: url
}