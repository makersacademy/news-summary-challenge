console.log("bundle is working")

const NewsModel = require("./newsModel")
const NewsView = require("./newsView")

const model = new NewsModel();
const view = new NewsView(model);
