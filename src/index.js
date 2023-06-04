console.log("working");

const NewsClient = require("./newsClient");
const client = new NewsClient();

console.log(client.fetchAllHeadlines());
