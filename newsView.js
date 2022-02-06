const NewsApi = require("./newsApi");
const NewsModel = require("./newsModel");

class NewsView {
constructor(model =  new NewsModel(), api = new NewsApi()) {
    this.model = model
    this.api = api

    
    document.querySelector('#load-news').addEventListener('click', (e) => {
        e.preventDefault()
        this.api.loadNews(callback => {
            this.mainContainerEl = document.querySelector('#news-list');
            this.displayNews(callback)
        })
        
    })
}

    displayNews(newsList) {
     this.removePrevNews()
        newsList = this.model.getNews()
        Array.from(newsList).forEach(news => {
            const div = document.createElement('div')
            div.className = 'news-item'
            const header = document.createElement('a');
            header.innerText = news.fields.headline
            header.href = news.webUrl
            header.className = 'headline'
            const image = document.createElement('img');
            image.src = news.fields.thumbnail
            image.className = 'image'
            div.append(image)
            div.append(header)
            this.mainContainerEl.append(div)
        })
    }

    removePrevNews() {
        const prevHeader = document.querySelectorAll('.headline')
        const prevImage = document.querySelectorAll('.image')
        prevHeader.forEach(h => {
            h.remove()
        })
        prevImage.forEach(i => {
            i.remove()
        })
    }
}
module.exports = NewsView;