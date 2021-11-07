const { getFeed } = require('./src/getFeed');
const { displayFeed } = require('./src/displayFeed');
const newsFeed = require('./src/newsFeed');
const allStoriesBtn = document.getElementById("allStoriesButton");

feed = new newsFeed ();

getFeed('https://content.guardianapis.com/search?q=debate%20AND%20economy&api-key=test&show-fields=body,headline,thumbnail&show-tags=contributor', displayFeed, feed);

allStoriesBtn.addEventListener("click", () => {
  feedEl = document.getElementById("feedRequest");
  feedEl.innerHTML = "";
  getFeed(
    "https://content.guardianapis.com/search?q=debate%20AND%20economy&api-key=test&show-fields=body,headline,thumbnail&show-tags=contributor",
    displayFeed,
    feed
  );
});