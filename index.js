console.log('The news app is running');

const NewsClient = require('./newsClient');
const NewsModel = require('./newsModel');
const NewsView = require('./newsView');

const newsClient = new NewsClient;
const newsModel = new NewsModel;
const newsView = new NewsView(newsModel, newsClient);

// newsClient.loadNews((news) => {
//   console.log(news.response.results[3].webTitle)
// })

newsView.displayNewsFromApi();

