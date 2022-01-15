
class NewsModel{
	
	constructor(){
		this.newsArr = [];
	}

	getNews(){
		return this.newsArr
	}

	updateNews(news){
		this.newsArr = news
	}


}


module.exports = NewsModel;