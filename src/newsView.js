const NewsApi = require("./newsApi")
const NewsModel = require("./newsModel")

class NewsView{
	
	constructor(model = new NewsModel(), api = new NewsApi()){
		this.model = model;
		this.api = api;
		this.newsBlock = document.querySelector('.news-block');
		

		(()=>{
			this.load(()=>{
				let btn = document.querySelectorAll('.my-btn');
				this.newsSlot = document.querySelector('#news-slot');
				window.addEventListener('hashchange', (e) => this.routechange(e))
				btn.forEach(el =>{
					el.addEventListener('click', ()=>{
						// this.newsSlot.style.display = 'flex'
						this.newsSlot.style.height = '320px'
						this.newsSlot.style.opacity = 1
						console.log('button clicked');
					})
				})
			})
		})();

	}

	routechange(e){
		const hashLocation = window.location.hash.substring(1);
		console.log(hashLocation);
		this.loadPopUp(hashLocation)
	}

	loadPopUp(url){
		this.api.fetchNews((data)=>{
			let result = data[url - 1].webTitle;
			this.newsSlot.innerHTML = result
			this.imgEl = document.createElement('img');
			this.imgEl.classList.add('thumb')
			console.log(data[url - 1].fields.thumbnail);
			this.imgEl.src = data[url - 1].fields.thumbnail
			this.newsSlot.append(this.imgEl)
			this.btn = document.createElement('button')
			this.btn.innerHTML = 'close'
			this.btn.classList.add('pop-btn')
			this.newsSlot.append(this.btn)
			this.btn.addEventListener('click', ()=>{
				// this.newsSlot.style.display = 'none'
				this.newsSlot.style.height = '0'
				this.newsSlot.style.opacity = 0
			})
		})

	}	



	displayNews(){
		this.news = this.model.getNews();
		// console.log(this.news);
		this.news.forEach((news, index)=>{
			// console.log(news.webTitle);
			let html = `
			<div class="card" style="width: 18rem;">›
				<img src=${news.fields.thumbnail} class="card-img-top" alt="...">
				<div class="card-body">
					<h6 class="card-title">${news.webTitle}</h6>
					<div class="text-center">
						<a href="#${index + 1}" class="btn my-btn">View More</a>
						<a target="_blank" href="${news.webUrl}" class="btn my-btn">View Full News</a>
					</div>
				</div>
			</div>
			`
			this.newsBlock.insertAdjacentHTML('beforebegin', html)
		})
	}

	load(callback){
		this.api.fetchNews(news => {
			this.model.updateNews(news)
			this.displayNews()
			callback()
		})
	}
}


module.exports = NewsView;