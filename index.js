const ModelNews = require('./modelNews');
const NewsModel = require('./viewNews');
const ViewNews = require('./viewNews');
const model = new ModelNews();
const view = new ViewNews(model);
model.addNews('this is news');
view.displayNews();