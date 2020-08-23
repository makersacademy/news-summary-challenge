(function(exports) {

    dillscribe('Article Model', function() {
        it('An article is an article object and it can return content', function() {
            article = new Article("Harry LB and Ryan Viegas Convicted, Read more!");
            assert.isTrue(article instanceof Article);
            assert.isTrue(article.getContent() === "Harry LB and Ryan Viegas Convicted, Read more!")
        })
    })
    dillscribe('Newspaper Model', function() {
        it('A Newspaper is a newspaper, it can return a list of articles', function() {
            newspaper = new Newspaper();
            assert.isTrue(newspaper instanceof Newspaper)
            assert.isTrue(newspaper.getList().length === 0)
        })
        it('Can add an article to the newspaper', function() {
            newspaper = new Newspaper();
            article = new Article("Ruby is the best!")
            newspaper.addArticle(article);
            assert.isTrue(newspaper.getList().length === 1)
            assert.isTrue(newspaper.getList()[0] === article)
        })
    })
    
})(this);