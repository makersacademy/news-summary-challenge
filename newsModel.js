class NewsModel {
    constructor() {
        this.articlesArray = []
    }

    formatArticles(article) {
        return {
            title: article.webTitle,
            url: article.webUrl
        }
    }

    setArticles(response) {
        response.forEach((article) => {
            // this.articlesArray.push(this.formatArticles(article))
            // This line should reduce the array of objects returned in 
            // 'response' to the title and URL and put that into the articlesArray;
            // presently it doesn't work, so the below line is a stand-in that
            // just pushes the title for presentation on the client
            this.articlesArray.push(article.webTitle)
        })
    }

    getArticles() {
        return this.articlesArray
    }
}

module.exports = NewsModel;