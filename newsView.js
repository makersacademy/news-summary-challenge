class newsView {
    constructor(model,api) {
        this.model = model;
        this.api = api;
        this.mainContainerEl = document.querySelector('#main-container');
    
    }

    displayNews() {
        let existingNews = document.querySelectorAll('div.note');

        existingNews.forEach(element => element.remove())

        const news = this.model.getNews()
        news.forEach(news_text => {
            const newsEl = document.createElement('div');
            newsEL.innerText = news_text;
            newsEL.className = 'news';
            this.mainContainerEl.append(newsEl);

        })
    }
    
}

module.exports = newsView; 
