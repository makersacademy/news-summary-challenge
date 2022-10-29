const guardianAPIJson = require('./guardianSearchWithThumbnails.json');
const NewsClient = require('./newsClient');
const NewsView = require('./newsView');

console.log(guardianAPIJson);

const newsClient = new NewsClient();
const newsView = new NewsView(newsClient, document.body);

newsView.displayNews();
