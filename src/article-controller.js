(function(exports) {

	function ArticleController() {
		this.articleList = new ArticleList();
		this.articleListView = new ArticleListView(this.articleList);
	}

	ArticleController.prototype.updateHTML = function() {
		htmlArticle = document.getElementById("headlines");
		htmlArticle.innerHTML = this.articleListView.toHTML();
	}

	ArticleController.prototype.newArticle = function(title) {
		this.articleList.newArticle(title);
	};

	exports.ArticleController = ArticleController;

})(this);