(function (exports){

    function NewsDisplayHeadlines() {
        var display = new NewsDisplayArticles("article")
        assert.isTrue(display.text === 'article');
}
    NewsDisplayHeadlines();

})(this);