describe('NewsArticleList', function(){
    it('gets news articles when created', function(){
        news = new NewsArticleList()
        // stub api call
        news.getData = function(){
            response = exampleData
            article = new NewsArticle(response.webTitle)
            this.articles.push(article)
        }
        assert.contains(news.articles, "Gibraltar v Republic of Ireland: Euro 2020 qualifier – live!")
    })
})