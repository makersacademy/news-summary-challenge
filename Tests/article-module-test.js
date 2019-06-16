function ArticleHasTitleAndURL() {
	var title = "Article title";
	var url = "url";
	var image = "image";
	var body = "Article Body";
	var article = new Article(title, url, image, body);
	assert.isTrue(article.title === title)
	assert.isTrue(article.url === url)
	assert.isTrue(article.image === image)
	assert.isTrue(article.body === body)
};

ArticleHasTitleAndURL();

function GetTitleTest() {
	var title = "Aticle title";
	var article = new Article(title);
	assert.isTrue(article.getTitle() === title)
};

GetTitleTest();
