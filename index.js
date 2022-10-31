const NewsView = require('./newsView');
const NewsModel = require('./newsModel');
const NewsClient = require('./newsClient');

const model = new NewsModel();
const client = new NewsClient();
const view = new NewsView(model, client);

view.displayFilterHeadlinesFromApi()

// view.displayHeadlinesFromApi()

