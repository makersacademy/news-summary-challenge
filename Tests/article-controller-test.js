function TestArticleController() {

	function ArticleListDouble() {};

	ArticleListDouble.prototype.updatePageWithTitles = function() {
			return "Article Title"
	};

	function ArticleListViewDouble() {};

	ArticleListViewDouble.prototype.toHTML = function() {
		return "<ul><li>Article Title</li></ul>"
	};

	var articleListDouble = new ArticleListDouble();
	var articleListViewDouble = new ArticleListViewDouble();
	var controller = new ArticleController(articleListDouble, articleListViewDouble);
	controller.updatePageWithTitles("headlines");
	assert.isTrue(document.getElementById("headlines").innerHTML === "<ul><li>Article Title</li></ul>", "Article title displayed on page")
};

TestArticleController();
