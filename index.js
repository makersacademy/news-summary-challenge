const GuardianApi = require('./guardianApi');
const ModelNews = require('./modelNews');
const ViewNews = require('./viewNews');

const model = new ModelNews();
const api = new GuardianApi();
const view = new ViewNews(model,api);

view.displayNewsFromApi();
