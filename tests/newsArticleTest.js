describe('NewsArticle', function() {
    it('has a title', function(){
        article = new NewsArticle("Sunny weather on the way")
        assert.isEqual(article.title, "Sunny weather on the way")
    })
})