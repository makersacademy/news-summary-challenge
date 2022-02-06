const NewsApi = require('./newsApi');
const NewsView = require('./newsView')
const NewsModel = require('./newsModel')

const api = new NewsApi();
const view = new NewsView();
const model = new NewsModel();

api.retrieveNewsData((newsData) => {
    view.displayNews(newsData);
})