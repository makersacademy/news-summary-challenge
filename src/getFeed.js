const newsFeed = require('./newsFeed');

const getFeed = (feedUrl, callback, feedName) => {
  fetch(`${feedUrl}`)
  .then(response => response.json())
  .then((jsonResponse) => {
    let results = jsonResponse["response"]["results"]
    callback(results);
    feedName.addToStories(results);
  })
}

module.exports = {
  getFeed
}