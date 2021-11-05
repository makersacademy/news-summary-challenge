const { getFeed } = require('./src/getFeed');
const { displayFeed } = require('./src/displayFeed');

getFeed('https://content.guardianapis.com/search?page=1&q=debate&api-key=test', displayFeed);