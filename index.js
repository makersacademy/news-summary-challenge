const NewsApi = require("./guardianNewsApi");
const NewsView = require("./guardianNewsView");

const newsApi = new NewsApi();
const newsView = new NewsView(newsApi);

newsView.searchNews();