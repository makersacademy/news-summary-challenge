var NewsArticleDouble = function(title, newsUrl){
    this.title = title
    this.newsUrl = newsUrl
    this.image = "https://i.guim.co.uk/img/media/62e12454279c5ffa7a7aa8a5f37a331de86f8271/0_421_3806_2284/master/3806.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&s=e0f3e82c45d36dd9a8969c9ba0c49a61"
}
var NewsArticlesListDouble = function() {
    var articles = []
    newsDouble1 = new NewsArticleDouble(exampleData.response.results[0].webTitle, "")
    newsDouble1.id = 0
    articles.push(newsDouble1)
    newsDouble2 = new NewsArticleDouble(exampleData.response.results[1].webTitle, "")
    newsDouble2.id = 1
    articles.push(newsDouble2)
    this.articles = articles
}

describe('HeadlinesView', function() {
    it('returns html to display each headline with an image as part of a link', function(){
        var newsArticlesListDouble = new NewsArticlesListDouble
        var headlines = new HeadlinesView(newsArticlesListDouble)
        var html = 
            "<p>" +
                "<a href=\"#news/0\">" +
                    "<img src=\"https://i.guim.co.uk/img/media/62e12454279c5ffa7a7aa8a5f37a331de86f8271/0_421_3806_2284/master/3806.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&s=e0f3e82c45d36dd9a8969c9ba0c49a61\" style=\"width:48px;height:48px;\">" + 
                    "Gibraltar v Republic of Ireland: Euro 2020 qualifier – live!</a></p>" +
            "<p>" +
            "<a href=\"#news/1\">" +
                "<img src=\"https://i.guim.co.uk/img/media/62e12454279c5ffa7a7aa8a5f37a331de86f8271/0_421_3806_2284/master/3806.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&s=e0f3e82c45d36dd9a8969c9ba0c49a61\" style=\"width:48px;height:48px;\">" + 
                "Brexit march: '1 million' rally for people's vote - live updates</a></p>" 
        assert.isEqual(headlines.getHTML(), html)
    })
})