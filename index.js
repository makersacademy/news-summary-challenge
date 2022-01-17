const NewsSummaryApis = require('./newsSummaryApis');
const NewsSummaryView = require('./newsSummaryView');
const NewsSummaryModel = require('./newsSummaryModel')

let api = new NewsSummaryApis();
let model = new NewsSummaryModel();
let view = new NewsSummaryView(model, api);

api.loadHeadlines((newsData) => {
  view.displayHeadlines(newsData);
})
