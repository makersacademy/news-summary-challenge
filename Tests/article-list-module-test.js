function HasAnArrayOfArticles() {
	var article_list = new ArticleList();
	assert.isTrue(Array.isArray(article_list.articles))
};

HasAnArrayOfArticles();

function ReturnsAllArticles() {
	var article_list = new ArticleList();
	assert.isTrue(article_list.displayArticles() === article_list.articles)
};

ReturnsAllArticles();

function CreatesNewArticle() {
	var article_list = new ArticleList();
	var headline = "Article title";
	var url = "url";
	var image = "image";
	var  body = "Body of the article";
	article_list.createArticle(headline, url, image, body);
	assert.isTrue(article_list.displayArticles()[0].headline === headline)
	assert.isTrue(article_list.displayArticles()[0].url === url)
	assert.isTrue(article_list.displayArticles()[0].image === image)
	assert.isTrue(article_list.displayArticles()[0].body === body)
};

CreatesNewArticle();