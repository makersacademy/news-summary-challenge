const NewsModel = require('./newsModel');
const NewsView = require('./newsView');

const model = new NewsModel();
const view = new NewsView(model);

model.addNews('test')
view.displayNews();