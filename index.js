const NewsModel = require('./newsModel');
const NewsView = require('./newsView');
const NewsApi = require('./newsApi');
const GUARDIAN_API_KEY = require('./apiKey.env')
require('dotenv').config();

const model = new NewsModel;
const api = new NewsApi;
const view = new NewsView(model, api);

console.log(process.env)