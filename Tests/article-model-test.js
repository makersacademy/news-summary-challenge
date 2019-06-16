function ArticleTitleDisplay() {
	var article = new Article("Article Title", "www.news.example", "Body");
	assert.isTrue(article.getTitle() === "Article Title", "Article title is displayed")
};

ArticleTitleDisplay();

function ArticleURLDisplay() {
	var article = new Article("Article Title", "www.news.example", "Body");
	assert.isTrue(article.getURL() === "www.news.example", "Article URL is displayed");
};

ArticleURLDisplay();

function ArticleBodyDisplay() {
	var article = new Article("Article Title", "www.news.example", "Body");
  assert.isTrue(article.getBody() === "Body", "Article body is displayed");
};

ArticleBodyDisplay();