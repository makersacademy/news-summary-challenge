const GuardianClient = require('./guardianClient');

const client = new GuardianClient();
client.fetchGuardianData().then((response) => console.log(response));