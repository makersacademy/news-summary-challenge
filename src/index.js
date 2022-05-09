const NewsView = require("./newsView");
const NewsModel = require("./newsModel");
const Api = require("./api");

console.log('The news app is running...')

const view = new NewsView();
const model = new NewsModel();
const Api = new Api();