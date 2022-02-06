class NewsModel {
    constructor() {
    }

    getNews(newsData) {
        const news_array = newsData.response.results;
        console.log(news_array);
        return news_array;
    }
}

module.exports = NewsModel;