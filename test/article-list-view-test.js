(function(exports) {
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
        articleList.addArticle("Ginger Baker: a master and monster who split rock music apart");
        var articleListView = new ArticleListView(articleList);
        var htmlString = '<ul><li>Ginger Baker: a master and monster who split rock music apart</li></ul>';
        assert.isTrue(articleListView.outputHtmlString() === htmlString);
    }
    canOutputHtmlString();
  })(this);