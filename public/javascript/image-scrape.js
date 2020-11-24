import { createRequire } from "module";
const require = createRequire(import.meta.url);
var AylienNewsApi = require("aylien-news-api");

var defaultClient = AylienNewsApi.ApiClient.instance;

var app_id = defaultClient.authentications["app_id"];
app_id.apiKey = '94e437b5';

var app_key = defaultClient.authentications["app_key"];
app_key.apiKey = '0f47ebb07ddae0386fc0428c9f8fd2b0';

var api = new AylienNewsApi.DefaultApi();

console.log(api)

var opts = {
    Language: ["en"],
    sourceDomain: ["www.theguardian.com/world"],
    publishedAtStart: "NOW-7DAYS",
    publishedAtEnd: "NOW",
};

var callback = function(error, data, response) {
    if (error) {
        console.error(error);
    } else {
        console.log("API called successfully. Returned data: ");
        console.log("========================================");
        for (var i = 0; i < data.stories.length; i++) {
            console.log(data.stories)
            console.log(data.stories[i].title + " / " + data.stories[i].source.name);
        }
    }
};

api.listStories(opts, callback);
