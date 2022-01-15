const NewsApi = require("./newsApi");
const NewsAppModel = require("./newsAppModel");

api = new NewsApi();
model = new NewsAppModel();

api.getArticles((articles) => {
  for (const article of articles.response.results) {
    model.addArticle(article);
  }
})

console.log(model.articles);
