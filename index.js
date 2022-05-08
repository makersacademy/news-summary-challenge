const NewsModel = require('./newsModel')

const model = new NewsModel();

console.log('the news app is running');
console.log(model.getNews());