(function(exports){
    function NewsController(newsArticlesList) {
        this.newsArticlesList = newsArticlesList
        this.headlines = new HeadlinesView(this.newsArticlesList)
    }
    NewsController.prototype.render = function(){
        document.getElementById("app").innerHTML = this.headlines.getHTML()
    }
    exports.NewsController = NewsController
})(this)