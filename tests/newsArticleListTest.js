// stub api call
NewsArticleList.prototype.getData = function (){
    console.log(this)
    this.articles = []
    this.articles.push("Gibraltar v Republic of Ireland: Euro 2020 qualifier")
    console.log(this)
}

describe('NewsArticleList', function(){
    it('gets news articles when created', function(){
        var news = new NewsArticleList()
        console.log("news " + news)
        assert.contains(news.articles, "Gibraltar v Republic of Ireland: Euro 2020 qualifier")
    })
})