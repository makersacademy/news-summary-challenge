const newsClient = require("./src/clients/newsClient.js");
const newsArticle = require("./src/models/newsArticle.js");
const newsView = require("./src/views/newsView.js");

const model = new newsArticle();
const client = new newsClient();
const view = new newsView(model, client);
view.displayNewsFromApi();
