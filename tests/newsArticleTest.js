// stub api call
NewsArticle.prototype.getArticleDetails = function (){
    this.summary = "3.34pm EDT\n15:34\n\n\n\nMatch report: Gibraltar 0-1 Rep of Ireland\n\n\nIreland got there in the end, courtesy of a second-half strik"
    this.image = "https://i.guim.co.uk/img/media/62e12454279c5ffa7a7aa8a5f37a331de86f8271/0_421_3806_2284/master/3806.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&s=e0f3e82c45d36dd9a8969c9ba0c49a61"
}

describe('NewsArticle', function() {
    it('has a title', function(){
        article = new NewsArticle("Sunny weather on the way", "https://www.theguardian.com/football/live/2019/mar/23/gibraltar-v-republic-of-ireland-euro-2020-qualifier-live")
        assert.isEqual(article.title, "Sunny weather on the way")
    })
    it('has a url', function(){
        article = new NewsArticle("Sunny weather on the way", "https://www.theguardian.com/football/live/2019/mar/23/gibraltar-v-republic-of-ireland-euro-2020-qualifier-live")
        assert.isEqual(article.newsUrl, "https://www.theguardian.com/football/live/2019/mar/23/gibraltar-v-republic-of-ireland-euro-2020-qualifier-live")
    })
    it('gets article text summary from Aylien', function(){
        article = new NewsArticle("Sunny weather on the way", "https://www.theguardian.com/football/live/2019/mar/23/gibraltar-v-republic-of-ireland-euro-2020-qualifier-live")
        assert.isEqual(article.summary, "3.34pm EDT\n15:34\n\n\n\nMatch report: Gibraltar 0-1 Rep of Ireland\n\n\nIreland got there in the end, courtesy of a second-half strik")
    })
    it('gets article image from Aylien', function(){
        article = new NewsArticle("Sunny weather on the way", "https://www.theguardian.com/football/live/2019/mar/23/gibraltar-v-republic-of-ireland-euro-2020-qualifier-live")
        assert.isEqual(article.image, "https://i.guim.co.uk/img/media/62e12454279c5ffa7a7aa8a5f37a331de86f8271/0_421_3806_2284/master/3806.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&s=e0f3e82c45d36dd9a8969c9ba0c49a61")
    })
})