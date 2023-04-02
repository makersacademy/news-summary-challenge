const NewsClient = require('./newsClient');
const NewsModel = require('./newsModel');
const NewsView = require('./newsView');

client = new NewsClient;
model = new NewsModel;
view = new NewsView(model, client);

view.displayNewsFromApi();

