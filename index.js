const newsModel = require('./modelNews')
const newsView = require('./viewNews')

const model = new newsModel;
const view = new newsView(model);
model.addNews("help")

console.log('the news app is running');

console.log(model.getNews());



view.displayNews();