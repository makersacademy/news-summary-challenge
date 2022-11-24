const NewsModel = require('./newsModel');
const NewsClient = require('./newsClient');

const model = new NewsModel;
const client = new NewsClient(model);