function ArticleHasHeadlineAndURL() {
	var headline = "Article title";
	var url = "url";
	var image = "image";
	var body = "Body of the article";
	var article = new Article(headline, url, image, body);
	assert.isTrue(article.headline === headline)
	assert.isTrue(article.url === url)
	assert.isTrue(article.image === image)
	assert.isTrue(article.body === body)
};

ArticleHasHeadlineAndURL();

function GetHeadlineTest() {
	var headline = "headline";
	var article = new Article(headline);
	assert.isTrue(article.getHeadline() === headline)
};

GetHeadlineTest();
