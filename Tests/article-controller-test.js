function TestInstanceOfArticleController() {
	var articleController = new ArticleController();
	assert.isTrue(articleController instanceof ArticleController)
};

TestInstanceOfArticleController();

function HTMLDisplaysTitles() {

	var articleController = new ArticleController();

	function ArticleListViewDouble() {}
	
	ArticleListViewDouble.prototype = {
		toHTML: function() {
			return "<ul><li><div>First Title</div></li></ul>"
		}
	};

	var articleListViewDouble = new ArticleListViewDouble();
	articleController.articleListView = articleListViewDouble;
	articleController.updateHTML();
	htmlArticle = document.getElementById("headlines");
	assert.isTrue(htmlArticle.innerHTML === articleListViewDouble.toHTML())
};

HTMLDisplaysTitles();