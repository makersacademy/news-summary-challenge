const GuardianClient = require('./guardianClient');
const GuardianView = require('./guardianView');

const client = new GuardianClient();
const view = new GuardianView(client);

console.log('The Guardian API is running.');
