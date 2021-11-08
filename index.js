const { getFeed } = require('./src/getFeed');
const { displayFeed } = require('./src/displayFeed');
const newsFeed = require('./src/newsFeed');
const allStoriesBtn = document.getElementById("allStoriesButton");
// const feedUrl = 'https://content.guardianapis.com/search?api-key=test&show-fields=body,headline,thumbnail&show-tags=contributor';
const feedUrl = 'https://content.guardianapis.com/search?q=debate%20AND%20economy&api-key=test&show-fields=body,headline,thumbnail&show-tags=contributor';
feed = new newsFeed ();


getFeed(feedUrl, displayFeed, feed);

allStoriesBtn.addEventListener("click", () => {
  feedEl = document.getElementById("feedRequest");
  feedEl.innerHTML = "";
  getFeed(
    feedUrl,
    displayFeed,
    feed
  );
});