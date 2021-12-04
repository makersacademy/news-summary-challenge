const { getFeed } = require('./src/getFeed')
const { displayFeed } = require('./src/displayFeed')

getFeed('https://content.guardianapis.com/search?q=Cricket&api-key=test&show-fields=body,headline,thumbnail', displayFeed);