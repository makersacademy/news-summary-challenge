(function(exports){
    class ArticleList {
        constructor() {
            this.articles = [];
            this.articleID = 0
        }
    }

    ArticleList.prototype.createArticle = function(headline, date, url, image) {
        let Article = new Article(headline, this.articleID, date, url, image)
        this.articleID++
        this.articles.push(article)
    }

    ArticleList.prototype.showAll = function() {
        return this.articles
    }

    exports.HeadlineList()
})(this);