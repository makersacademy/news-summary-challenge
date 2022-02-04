const NewsModel = require('./newsModel');
const NewsView = require('./newsView');

const newsModel = new NewsModel;
const newsView = new NewsView(newsModel);

console.log('The news app is running');
newsView.displayNews();