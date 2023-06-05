const NewsClient = require('./newsClient');
const NewsModel = require('./newsModel');
const NewsView = require('./newsView');

console.log('Running the news app');

const client = new NewsClient ();
const model = new NewsModel ();
const view = new NewsView (client, model);


client.loadNews((news) => {
    console.log(news.response.results.webTitle)
})
view.displayNewsFromApi();

newsClient.searchQueryResults('food', (data) => {
  console.log(data)
})