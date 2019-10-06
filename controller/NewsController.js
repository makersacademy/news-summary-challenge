(function(exports) {
    function NewsController(articleList, apiCaller) {
        this.articleList = articleList;
        this.articleListView = new ArticleListView(articleList);
        this.apiCaller = apiCaller;
    }

    NewsController.prototype.getArticleList = function() {
        return this.articleList;
    };

    NewsController.prototype.displayHeadlines = function() {
        document.getElementById("headline-list").innerHTML = this.articleListView.outputHtmlString();
    }; 

    exports.NewsController = NewsController;
})(this);