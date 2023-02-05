const NewsView = require("./newsView");
const NewsModel = require("./newsModel");
const NewsClient = require("./newsClient");

const newsModel = new NewsModel();
const newsClient = new NewsClient();
const newsView = new NewsView(newsModel, newsClient);

newsView.displayNewsFromApi();
