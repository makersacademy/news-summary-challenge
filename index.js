const NewsModel = require("./newsModel");
const NewsView = require("./newsView");

const model = new NewsModel();
const view = new NewsView(model);

console.log(model.getNews());

const newsItemOne = "Egypt says wreckage from flight found in Mediterranean";
const newsItemTwo =
  "Humans damaging planet faster than it can recover, report finds";
model.addNewsItem(newsItemOne);
model.addNewsItem(newsItemTwo);
view.displayNewsItems();
