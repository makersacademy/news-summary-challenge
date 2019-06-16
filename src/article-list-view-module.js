(function(exports) {
	function ArticleListView(articleList) {
		this.articleList = articleList;
	}

	ArticleListView.prototype.toHTML = function() {

		var list = '<ul>';

    for ( var i = 0; i < this.articleList.articles.length; i++) {
    	list += "<li><div>" + this.articleList.displayArticles()[i].title + "</div></li>"
    }
      list += "</ul>";
      return list
	};

exports.ArticleListView = ArticleListView;

})(this);