const NewsSummaryView = require('./newsSummaryView');
const NewsSummaryModel = require('./newsSummaryModel');
const GuardianApi = require('./guardianApi');

console.log('The news app is running...');

const guardianApi = new GuardianApi();
const newsModel = new NewsSummaryModel();
const newsView = new NewsSummaryView(newsModel, guardianApi);
