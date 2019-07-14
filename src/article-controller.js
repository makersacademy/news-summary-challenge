(function(exports) {

	function ArticleController(articleList, articleListView) {
		this.articleList = articleList || new ArticleList();
		this.articleListView = articleListView || new ArticleListView(this.articleList);
	}

	ArticleController.prototype.updatePageWithTitles = function(element) {
		document.getElementById(element).innerHTML = this.articleListView.toHTML();
	}

	ArticleController.prototype.loadTitles = function(element) {
		var self = this;
		this.articleList.getArticles(function() {
			self.updatePageWithTitles(element)
		});
	};

	exports.ArticleController = ArticleController;

})(this);