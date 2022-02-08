class NewsModel {
    constructor(...newsList) {
        this.newsList = newsList
    }

    getNews() {
        return this.newsList
    }

    setNews(news) {
        this.newsList = news
    }
}

module.exports = NewsModel