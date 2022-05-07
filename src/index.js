const NewsView = require("./newsView");

const view = new NewsView();

// view.model.setArticles(["Hello", "World"]);

// view.displayArticles();

view.displayArticlesFromApi();

console.log(view.model.getArticles());
