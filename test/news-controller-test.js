(function(exports) {
    describe('news controller');

    console.log("canBeInstantiated:");
	function canBeInstantiated() {
        var articleList = new ArticleList();
		var newsController = new NewsController(articleList);
		assert.isTrue(newsController !== undefined);
	}
    canBeInstantiated();

    console.log("returnsArticleList:");
	function returnsArticleList() {
        var articleList = new ArticleList();
        var newsController = new NewsController(articleList);
		assert.isTrue(newsController.getArticleList() === articleList);
	}
    returnsArticleList();

    console.log("putsHeadlinesInDom:");
	function putsHeadlinesInDom() {
        var articleList = new ArticleList();
        var newsController = new NewsController(articleList);
        newsController.getArticleList().addArticle("Ginger Baker: a master and monster who split rock music apart");
        newsController.displayHeadlines();
        assert.isTrue(document.getElementById("headline-list").innerHTML === "<ul><li>Ginger Baker: a master and monster who split rock music apart</li></ul>");
	}
    putsHeadlinesInDom();
})(this);