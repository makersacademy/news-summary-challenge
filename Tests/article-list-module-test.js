function HasAnArrayOfArticles() {
	var articleList = new ArticleList();
	assert.isTrue(Array.isArray(articleList.articles))
};

HasAnArrayOfArticles();

function ReturnsAllArticles() {
	var articleList = new ArticleList();
	assert.isTrue(articleList.displayArticles() === articleList.articles)
};

ReturnsAllArticles();

function CreatesNewArticle() {
	var articleList = new ArticleList();
	var title = "Article title";
	var url = "url";
	var image = "image";
	var body = "Article Body";
	articleList.createArticle(title, url, image, body);
	assert.isTrue(articleList.displayArticles()[0].title === title)
	assert.isTrue(articleList.displayArticles()[0].url === url)
	assert.isTrue(articleList.displayArticles()[0].image === image)
	assert.isTrue(articleList.displayArticles()[0].body === body)
};

CreatesNewArticle();