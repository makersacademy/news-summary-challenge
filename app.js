// import NewsApi from "./lib/newsApi";
const NewsApi = require("./lib/newsApi")

let api = new NewsApi();
api.fetchNews((data)=>{
	console.log(data);
})
console.log('hello');

