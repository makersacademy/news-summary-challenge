const NewsModel = require("./newsModel.js");
const NewsView = require("./newsView.js");

const model = new NewsModel();
const view = new NewsView(model);

view.showArticles();
