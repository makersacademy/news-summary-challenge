var NewsArticleDouble = function(title, newsUrl){
    this.title = title
    this.newsUrl = newsUrl
    this.image = "https://i.guim.co.uk/img/media/62e12454279c5ffa7a7aa8a5f37a331de86f8271/0_421_3806_2284/master/3806.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&s=e0f3e82c45d36dd9a8969c9ba0c49a61"
}

// stub api call
NewsArticleList.prototype.getData = function (){
    var articles = []
    var id = 0
    exampleData.response.results.forEach(function(newsItem) {
        item = new NewsArticleDouble(newsItem.webTitle, "")
        item.id = id
        id += 1
        articles.push(item)
    })
    this.articles = articles
}

describe('NewsArticleList', function(){
    it('gets news articles when created', function(){
        var news = new NewsArticleList()
        assert.isEqual(news.articles[0].title, "Gibraltar v Republic of Ireland: Euro 2020 qualifier – live!")
    })
    it('gives a unique id to each article', function(){
        var news = new NewsArticleList()
        assert.isEqual(news.articles[0].id, 0)
        assert.isEqual(news.articles[1].id, 1)
    })
})