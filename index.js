const newsView = require('./src/newsView')
const newsApi = require('./src/newsApi')
const newsModel = require('./src/newsModel')

const api = new newsApi();
const model = new newsModel()
const view = new newsView(model, api);

view.displayNewsFromApi();
