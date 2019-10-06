function testArticleListReturnArticles(){
    try {
        let articleList = new ArticleList();
        articleList.cacheArticles();
        assert.isTrue(articleList.getArticles() === [1,2])

    }
    catch(err) {
        return "Error - " + arguments.callee.name + " : " + err;
    }
    return "Pass - " + arguments.callee.name;
}
