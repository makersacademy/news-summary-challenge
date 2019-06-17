(function(exports) {
	function ArticleListView(articleList) {
		this.articleList = articleList;
	}

	ArticleListView.prototype.toHTML = function() {

		var list = '';

		this.articleList.articles.forEach(function(article) {
			var eachArticle = [
			"<div><a href='", 
			article.getURL(), 
			"'>",
			article.getTitle(),
			"</a></div>"
			]
			
			list += eachArticle.join("");
			
		});

		return list

	};

exports.ArticleListView = ArticleListView;

})(this);