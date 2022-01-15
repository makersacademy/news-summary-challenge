const NewsSummaryApis = require('./newsSummaryApis');
const NewsSummaryView = require('./newsSummaryView');

let api = new NewsSummaryApis();
let view = new NewsSummaryView(api);

api.loadHeadlines((newsData) => {
  view.displayNews(newsData);
});