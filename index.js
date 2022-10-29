var guardianAPIJson = require('./guardianSearchWithThumbnails.json');
const NewsClient = require('./newsClient');

console.log(guardianAPIJson);

const newsClient = new NewsClient();
const newsView = new NewsView(newsClient);

newsView.displayNews();
