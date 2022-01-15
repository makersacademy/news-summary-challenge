const ArticlesModel = require('./articlesModel');
const ArticlesView = require('./articlesView');
const NewsApi = require('./newsApi');

const api = new NewsApi();
const model = new ArticlesModel();
const view = new ArticlesView(model, api);

const allArticlesUrl = 'https://content.guardianapis.com/search?YOUR-API-KEY-HERE&show-fields=thumbnail';
const singleArticleUrl = '?YOUR-API-KEY-HERE&show-fields=thumbnail';

const getContent = (fragmentId, callback) => {
  // Changes page according to url
  if (fragmentId === 'home') {
    // Loads all articles if on home
    api.loadArticles(allArticlesUrl, (articles) => {
      model.setArticles(articles);
      view.displayArticles();
    });
  } else {
    // Headline was clicked, gets one article
    api.loadArticles(`https://content.guardianapis.com/${fragmentId}${singleArticleUrl}`, (article) => {
      const summaryUrl = article.response.content.webUrl;
      console.log(`Fetching summary from ${summaryUrl}...`);

      // After getting single article, fetches summary from api
      api.loadSummary(summaryUrl, (summary) => {
        // Callback on line 40 sets content of div to the summary text
        callback(summary.text);
      });
    });
  }
};

const loadContent = () => {
  const contentDiv = document.getElementById('main-container');
  const fragmentId = location.hash.substr(1);

  getContent(fragmentId, (content) => {
    contentDiv.innerHTML = content;
  });
};

if (!location.hash) {
  location.hash = '#home';
}

loadContent();

window.addEventListener('hashchange', loadContent);
