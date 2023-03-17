const Client = require('./newsClient');
const Model = require('./newsModel');
const View = require('./newsView');

const model = new Model;
const client = new Client;

const view = new View(model, client);
view.displayArticlesFromApi();