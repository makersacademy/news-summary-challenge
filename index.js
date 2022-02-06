const NewsApi = require('./newsApi');
const NotesModel = require('./newsModel');
const NotesView = require('./newsView');

const api = new NewsApi();
const model = new NotesModel();
const view = new NotesView(model);

api.loadArticles(articles => {
  articles.forEach(article => {
    model.addArticle(article.webTitle);
  });
  view.displayArticles();
});

// model.addArticle("this is an example article")
view.displayArticles();
console.log(model.getArticles());