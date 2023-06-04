class NewsModel {
    constructor(){
        this.news = [];
    }

    getNews() {
        return this.news
    }

    setNews(news){
        this.news = news;
    }

    addNews(newsFromApi) {
        console.log(newsFromApi)
        this.news = newsFromApi.response.results;
      }
}

module.exports = NewsModel;