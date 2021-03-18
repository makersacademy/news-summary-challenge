(function(exports){

    function testsNewsSummaryHasHeadlines() {
        var news = new News("headlines");
        assert.isTrue(news.headlines === "headlines");
    }

    function testsNewsCanShowHeadlines(){
        var news = new News("articles")
        assert.isTrue(news.showHeadlines() === "articles");
    }
   

    testsNewsSummaryHasHeadlines();
    testsNewsCanShowHeadlines();
})(this);