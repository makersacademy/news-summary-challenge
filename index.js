const { getFeed } = require('./src/getFeed')
const { displayFeed } = require('./src/displayFeed')

getFeed('https://content.guardianapis.com/search?q=Gibraltar&api-key=test&show-fields=body,headline,thumbnail', displayFeed);