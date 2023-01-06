const NewsClient = require("./NewsClient");
const NewsModel = require("./newsModel");
const NewsView = require("./newsView");

const client = new NewsClient();
const model = new NewsModel();
const view = new NewsView(model, client);

// console.log(model.getNews());

// const newsItemOne = "Egypt says wreckage from flight found in Mediterranean";
// const newsItemTwo =
//   "Humans damaging planet faster than it can recover, report finds";
// model.addNewsItem(newsItemOne);
// model.addNewsItem(newsItemTwo);
// view.displayNewsItems();

view.displayNotesFromApi();
