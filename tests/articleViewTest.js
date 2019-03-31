var NewsArticleDouble = function(title, newsUrl){
    this.title = title
    this.newsUrl = newsUrl
    this.summary = "Weathermen are predicting there will be sunshine this summer"
    this.image = "https://i.guim.co.uk/img/media/62e12454279c5ffa7a7aa8a5f37a331de86f8271/0_421_3806_2284/master/3806.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&s=e0f3e82c45d36dd9a8969c9ba0c49a61"
}
describe('ArticleView', function(){
    it('returns html to display a single article', function(){
        var article = new NewsArticleDouble("Hot weather on the way", "")
        var view = new ArticleView(article)
        var html = 
            "<h1>" +
                "Hot weather on the way" +
            "</h1>" +
            "<div>" +
                "<img src=\"https://i.guim.co.uk/img/media/62e12454279c5ffa7a7aa8a5f37a331de86f8271/0_421_3806_2284/master/3806.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&s=e0f3e82c45d36dd9a8969c9ba0c49a61\" style=\"width:500px;height:300px;\">" +
                "Weathermen are predicting there will be sunshine this summer" +
            "</div>"
        assert.isEqual(view.getHTML(), html)
    })
})