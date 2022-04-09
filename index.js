const NewsSummary = require('./newsSummaryView.js');
const GuardianApi = require('./guardianApi');

console.log('The news app is running...')

const guardianApi = new GuardianApi();
const newsSummary = new NewsSummary(guardianApi);
