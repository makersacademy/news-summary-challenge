const NewsSummaryApis = require('./newsSummaryApis');
const NewsSummaryView = require('./newsSummaryView');

let api = new NewsSummaryApis();
let view = new NewsSummaryView(api);

api.loadNews((newsData) => {
  view.displayNews(newsData);
});