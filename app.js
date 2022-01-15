const NewsApi = require("./src/newsApi")
const NewsModel = require("./src/newsModel")
const NewsView = require("./src/newsView")

let api = new NewsApi();
let view = new NewsView();
let model = new NewsModel();

view.displayNews((data)=>{
	model.updateNews(data)
	console.log(model.getNews());
})

