const NewsApi = require("./newsApi");
const NewsModel = require("./newsModel");
const NewsView = require("./newsView");

const api = new NewsApi
const model = new NewsModel
const view = new NewsView(model, api)

view.displayHeadlinesfromAPI()