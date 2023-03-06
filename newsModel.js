class NewsModel {
    constructor() {
        this.articlesArray = []
    }

    setArticles(response) {
        response.results.forEach((article) => {
            this.articlesArray.push(article.webTitle)
        })
    }

    formatArticles(article) {
        
    }

    getArticles() {
        return this.articlesArray
    }
}

module.exports = NewsModel;