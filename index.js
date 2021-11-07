const { getFeed } = require('./src/getFeed');
const { displayFeed } = require('./src/displayFeed');
const newsFeed = require('./src/newsFeed');

getFeed('https://content.guardianapis.com/search?page=1&api-key=test&show-fields=body,headline,thumbnail&show-tags=contributor', displayFeed);