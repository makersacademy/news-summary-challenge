const ArticleClient = require('./articleClient');

console.log('Running the news app');

const client = new ArticleClient();
client.fetchArticles('2023-01-06', (data) => {
  console.log(data);
});
