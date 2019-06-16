function InstantiatesWithAnArticleList() {
	var articleList = new ArticleList();
	var articleListView = new ArticleListView(articleList);
	assert.isTrue(articleListView.articleList === articleList)
};

InstantiatesWithAnArticleList();

function HTMLForEmptyArticleList() {
	var articleList = new ArticleList();
	var articleListView = new ArticleListView(articleList);
	assert.isTrue(articleListView.toHTML() === "<ul></ul>")
};

HTMLForEmptyArticleList();

function HTMLForSingleArticleList() {
	var articleList = new ArticleList();
	articleList.createArticle("Article Title");
	var articleListView = new ArticleListView(articleList);
	assert.isTrue(articleListView.toHTML() === "<ul><li><div>Article Title</div></li></ul>")
};

HTMLForSingleArticleList();

function HTMLForMultipleArticlesList() {
	var articleList = new ArticleList();
	articleList.createArticle("First Article Title");
	articleList.createArticle("Second Article Title");
	articleList.createArticle("Third Article Title");
	var articleListView = new ArticleListView(articleList);
	assert.isTrue(articleListView.toHTML() === "<ul><li><div>First Article Title</div></li><li><div>Second Article Title</div></li><li><div>Third Article Title</div></li></ul>")
};

HTMLForMultipleArticlesList();
