function HTMLDisplaysTitlesAsLinks() {
	var articleList = new ArticleList();

	function ArticleDouble(title, url, body) {};

	ArticleDouble.prototype = {
		getTitle: function() {
			return "Article Title"
		},

		getURL: function() {
			return "http://www.news.example"
		}
	};

	var article1 = new ArticleDouble();
	var article2 = new ArticleDouble();
	articleList.addArticle(article1);
	articleList.addArticle(article2);
	var articleListView = new ArticleListView(articleList);

	assert.isTrue(articleListView.toHTML().match(/<a href=\'http:\/\/www.news.example\'/g).length === 2, "Title links should be created");

};

HTMLDisplaysTitlesAsLinks();