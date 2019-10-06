(function(exports) {
    function NewsController(articleList, apiCaller) {
        this.articleList = articleList;
        this.articleListView = new ArticleListView(articleList);
        this.apiCaller = apiCaller;
    }

    NewsController.prototype.getArticleList = function() {
        return this.articleList;
    };

    NewsController.prototype.populateListFromJson = function() {
        console.log(this.apiCaller.getGuardian());
        var data = this.apiCaller.getGuardian();
        for (i=0; i<data.response.results.length; i++) {
            this.articleList.addArticle(data.response.results[i].webTitle);
        }
    };

    NewsController.prototype.displayHeadlines = function() {
        document.getElementById("headline-list").innerHTML = this.articleListView.outputHtmlString();
        console.log(this.articleListView.outputHtmlString());
    }; 

    exports.NewsController = NewsController;
})(this);