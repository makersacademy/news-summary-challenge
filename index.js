
console.log('News Summary 📰  Web is running')

const GuardianApi = require('./guardianApi');
const GuardianModel = require('./guardianModel');
const NewsView = require('./newsView');

const api = new GuardianApi();
const model = new GuardianModel();
const view = new NewsView(model, api);

view.showGuardianNews();