const NewsModel = require('./newsModel')
const NewsView = require('./newsView')

const model = new NewsModel();
const view = new NewsView();

console.log('the news app is running');
console.log(model.getNews());


model.addNews('todays headlines');
view.displayNews();