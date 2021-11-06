const Client = require('./client');
const client = new Client();

client.fetchNews((data) => {
  console.log(data);
});
