(function() {
    describe('article list view');

    console.log("canBeInstantiated:");
	function canBeInstantiated() {
		var articleListView = new ArticleListView();
		assert.isTrue(articleListView !== undefined);
	}
    canBeInstantiated();
  
    console.log('canOutputHtmlString');
    function canOutputHtmlString(){
        var articleList = new ArticleList();
        articleList.addArticle("Ginger Baker: a master and monster who split rock music apart", "http://www.ginger.baker");
        var articleListView = new ArticleListView(articleList);
        console.log(articleListView.outputHtmlString());
        var htmlString = '<ul><li><a href=http://www.ginger.baker>Ginger Baker: a master and monster who split rock music apart</a></li></ul>';
        assert.isTrue(articleListView.outputHtmlString() === htmlString);
    }
    canOutputHtmlString();
})();