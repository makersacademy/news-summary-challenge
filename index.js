
const ApiClass = require('./lib/articlesApi');
const ModelClass = require('./lib/articlesModel');
const ViewClass = require('./lib/articlesView');

const api = new ApiClass();
const model = new ModelClass();
const view = new ViewClass(model);

window.addEventListener('hashchange', () => {
  showArticleForCurrentPage();
});

document.getElementById('home-button').addEventListener('click', () => {
  history.replaceState(null, null, ' ');
  view.displayHeadlines();
});

const loadHeadlines = () => {
  api.loadHeadlines((data) => data.response.results.forEach( (article) => {
    model.addArticle(article);
    view.displayHeadlines();
  }));
};

const showArticleForCurrentPage = () => {
  showArticle(getArticleFromUrl(window.location));
};

const getArticleFromUrl = (location) => {
  return location.hash.split('#')[1];
};

const showArticle = (articleId) => {
  api.loadArticle(articleId, (data) => {
    console.log(data);
    view.displaySingleArticle(data.response.content);
  });
};

loadHeadlines();
