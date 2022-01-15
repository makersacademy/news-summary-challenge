const NewsApi = require("./src/newsApi")

let api = new NewsApi();
api.fetchNews((data)=>{
	console.log(data);
})
console.log('hello');
console.log('this is a test to see if --watch');