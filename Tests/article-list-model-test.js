function HasAnArrayOfArticles() {
	
	function ArticleDouble(title, url, body) {};

	ArticleDouble.prototype = {
		displayTitle: function() {
			return "Article Title"
		}
	};

	var articleDouble = new ArticleDouble("Article Title", "www.news.example", "Body")
	var articleList = new ArticleList();
	articleList.addArticle(articleDouble);

	assert.isTrue(articleList.articles.length === 1, "Article is added to the article list")
};

HasAnArrayOfArticles();