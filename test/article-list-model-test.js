(function() {
    describe('article list model');

    console.log("canBeInstantiated:");
	function canBeInstantiated() {
		var articleList = new ArticleList();
		assert.isTrue(articleList !== undefined);
	}
    canBeInstantiated();

    console.log("canAddAnArticleToList:");
	function canAddAnArticleToList() {
        var articleList = new ArticleList();
        articleList.addArticle("Headline", "URL");
        assert.isTrue(articleList.getList()[0].getHeadline() === "Headline");
        assert.isTrue(articleList.getList()[0].getUrl() === "URL");
	}
    canAddAnArticleToList();

    console.log('givesNewArtcielsId');
    function givesNewArtcielsId() {
        var articleList = new ArticleList();
        articleList.addArticle('hl1', 'url1');
        articleList.addArticle('hl2', 'url2');
        assert.isTrue(articleList.getList()[0].getId() === 1);
        assert.isTrue(articleList.getList()[1].getId() === 2);
    }
    givesNewArtcielsId();
})();