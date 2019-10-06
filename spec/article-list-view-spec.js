function testArticleListViewReturnHTML(){
    try {
        let articleList = new ArticleList();
        let articleListView = new ArticleListView(articleList);
        console.log(articleListView.returnListViewHTML());
        assert.isTrue(articleListView.returnListViewHTML() === "abc")
    }
    catch(err) {
        return "Error - " + arguments.callee.name + " : " + err;
    }
    return "Pass - " + arguments.callee.name;
}
