const Feed = require('./src/feed');
// const addHeadline = require('./src/addHeadline')
const feed = new Feed();

const apiKey = "eb3d861f-2043-4a4c-b13e-1909896dd0cf";

console.log(apiKey)

feed.fetchHeadlines(apiKey, feed.addHeadline);

