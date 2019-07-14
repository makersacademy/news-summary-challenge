function ArticleTitleDisplay() {
	var article = new Article("Article Title", "www.news.example", "image", "Body");
	assert.isTrue(article.getTitle() === "Article Title", "Article title is displayed")
};

ArticleTitleDisplay();

function ArticleURLDisplay() {
	var article = new Article("Article Title", "www.news.example", "image", "Body");
	assert.isTrue(article.getURL() === "www.news.example", "Article URL is displayed");
};

ArticleURLDisplay();

function ArticleImageDisplay() {
	var article = new Article("Article Title", "www.news.example", "image", "Body");
	assert.isTrue(article.getImage() === "image", "Article image will be displayed")
};

function ArticleBodyDisplay() {
	var article = new Article("Article Title", "www.news.example", "image", "Body");
  assert.isTrue(article.getBody() === "Body", "Article body is displayed");
};

ArticleBodyDisplay();