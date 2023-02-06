class NewsModel { 
    constructor(){
        this.news = []
    }

    getNews(){
       return this.news
    }

    setNews(news){
        this.news = news.response.results
    }
}

module.exports = NewsModel;