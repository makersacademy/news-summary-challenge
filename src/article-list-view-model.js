(function(exports) {
	function ArticleListView(articleList) {
		this.articleList = articleList;
	}

	ArticleListView.prototype.toHTML = function() {

		var list = '<ul>';

		this.articleList.articles.forEach(function(article) {
			var eachArticle = [
			"<li><div><a href='", 
			article.getURL(), 
			"'>",
			article.getTitle(),
			"</a></div></li>"
			]
			
			list += eachArticle.join("");
			list += "</ul>"
		});

		return list

	};

exports.ArticleListView = ArticleListView;

})(this);