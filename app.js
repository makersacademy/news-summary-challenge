const NewsApi = require("./src/newsApi")
const NewsModel = require("./src/newsModel")
const NewsView = require("./src/newsView")

let api = new NewsApi();
let model = new NewsModel();
let view = new NewsView()

view.displayNews((data)=>{
	model.updateNews(data)
	console.log(model.getNews());
})
