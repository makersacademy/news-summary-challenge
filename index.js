const NewsApi = require('./newsApi');
const NotesModel = require('./newsModel');
const NotesView = require('./newsView');

const api = new NewsApi();
const model = new NotesModel();
const view = new NotesView(model, api);

api.loadArticles(articles => {
  articles.forEach(article => {
    model.addArticle(article);
  });
  view.displayArticles();
});

view.displayArticles();
console.log(model.getArticles());
