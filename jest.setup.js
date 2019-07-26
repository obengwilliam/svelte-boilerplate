import "@babel/polyfill";
import dotenv from 'dotenv';

const nock = require('nock');

dotenv.config({path: './.test.env'});

nock('https://academy.valentinog.com')
	.get('/api/link/')
	.reply(200, [
		{
			title: 'test',
			url: 'test'
		},
		{
			title: 'test2',
			url: 'test2'
		}
	]);

nock('https://academy.valentinog.com')
	.get('/api/200')
	.reply(200, { success: true });

nock('https://academy.valentinog.com')
	.get('/api/404')
	.reply(404, { success: false });