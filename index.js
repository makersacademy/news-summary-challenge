console.log('The news app is running');

const NewsClient = require('./newsClient');

const newsClient = new NewsClient;

newsClient.loadNews((news) => {
  console.log(news.response.results[3].webTitle)
})