describe('NewsArticle', function() {
    it('has a title', function(){
        article = new NewsArticle("Sunny weather on the way", "www.guardian.com/1")
        assert.isEqual(article.title, "Sunny weather on the way")
    })
    it('has a url', function(){
        article = new NewsArticle("Sunny weather on the way", "www.guardian.com/1")
        assert.isEqual(article.url, "www.guardian.com/1")
    })
})