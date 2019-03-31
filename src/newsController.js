(function(exports){
    function NewsController(newsArticlesList) {
        this.newsArticlesList = newsArticlesList
        this.headlines = new HeadlinesView(this.newsArticlesList)
    }
    NewsController.prototype.renderPage = function(){
        document.getElementById("app").innerHTML = this.headlines.getHTML()
    }
    NewsController.prototype.listen = function() {
        var self = this
        window.addEventListener("hashchange", function() {
            newsId = window.location.hash.split("#news/")[1]
            view = new ArticleView(self.newsArticlesList.articles[parseInt(newsId)])
            document.getElementById("app").innerHTML = view.getHTML()
        })
    }
    exports.NewsController = NewsController
})(this)