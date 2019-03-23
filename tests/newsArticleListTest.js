// stub api call
NewsArticleList.prototype.getData = function (){
    var articles = []
    exampleData.response.results.forEach(function(newsItem) {
        articles.push(newsItem.webTitle)
    })
    this.articles = articles
}

describe('NewsArticleList', function(){
    it('gets news articles when created', function(){
        var news = new NewsArticleList()
        assert.contains(news.articles, "Gibraltar v Republic of Ireland: Euro 2020 qualifier – live!")
    })
})