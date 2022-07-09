const NewsModel = require('./newsModel');
const NewsView = require('./newsView');
const model = new NewsModel();
const view = new NewsView(model);
model.addArticle("Fuck this for a game of soldiers");
view.displayNews();