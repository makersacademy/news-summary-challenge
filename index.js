const News = require('./news');

const news = new News;
let today = new Date();

news.fetchNewsData(today.toISOString().slice(0, 10));

