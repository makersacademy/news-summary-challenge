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
    dillscribe('Newspaper View Model', function() {
        it('The newspaper view adds the html code to the articles (for a list)', function() {
            addSomeArticles();
            newspaperView = new NewspaperView(newspaper);
            console.log(newspaperView.wrapInHTML());
            assert.isTrue(newspaperView.wrapInHTML() === "<ul><li><div><a href='#articles/0'>1</a></div></li>" + 
            "<li><div><a href='#articles/0'>2</a></div></li></ul>")
        })
    })
    dillscribe('Newspaper Controller Model', function() {
        it('The newspaper controller can modify the html code on the webpage', function() {

        })
        it('Can upload a list of elements onto the webpage', function() {
            
        })
    })

    function addSomeArticles() {
        article1 = new Article("1");
        article2 = new Article("2");
        newspaper = new Newspaper();
        newspaper.addArticle(article1);
        newspaper.addArticle(article2);
    }
    
})(this);