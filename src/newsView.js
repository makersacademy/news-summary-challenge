const NewsApi = require("./newsApi")
const NewsModel = require("./newsModel")

class NewsView{
	
	constructor(model = new NewsModel(), api = new NewsApi()){
		this.model = model;
		this.api = api;
		this.newsBlock = document.querySelector('.news-block')

		window.addEventListener('load', ()=>{
			console.log('window loaded');
			this.api.fetchNews(news => {
				this.model.updateNews(news)
				this.displayNews()
			})
		})
	}

	displayNews(){
		this.news = this.model.getNews();
		// console.log(this.news);
		this.news.forEach(news=>{
			console.log(news.webTitle);
			let html = `
			<div class="card" style="width: 18rem;">›
				<img src=${news.fields.thumbnail} class="card-img-top" alt="...">
				<div class="card-body">
					<h6 class="card-title">${news.webTitle}</h6>
					<a href="#" class="btn my-btn">View More</a>
				</div>
			</div>
			`
			this.newsBlock.insertAdjacentHTML('beforebegin', html)
		})
	}
}



module.exports = NewsView;