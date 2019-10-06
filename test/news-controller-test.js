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

    console.log("AddsHeadlinesFromJson:");
	function AddsHeadlinesFromJson() {
        var articleList = new ArticleList();
        var mockApiCaller = new MockApiCaller();
        var newsController = new NewsController(articleList, mockApiCaller);
        newsController.populateListFromJson();
        newsController.displayHeadlines();
        var htmlString = "<ul><li>The 10 biggest books of autumn 2019</li><li>10 timeless fashion trends that never date</li><li>Thor! Blade! Picard! The 10 biggest surprises from Comic-Con 2019</li><li>Edinburgh festival 2019: the 10 best jokes</li><li>Edinburgh fringe 2019: 10 essential shows</li></ul>";
        console.log(document.getElementById("headline-list").innerHTML);
        assert.isTrue(document.getElementById("headline-list").innerHTML === htmlString);
	}
    AddsHeadlinesFromJson();
})(this);