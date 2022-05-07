const NewsView = require("./newsView");

const view = new NewsView();

view.model.addArticle("Hello World!");

view.displayArticles();
